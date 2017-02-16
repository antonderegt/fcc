import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import ModalViewer from './modal'

class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: this.getRecipeNames(),
      showModal: false,
      titleVal: '',
      ingredientsVal: '',
      id: 12345
    }
  }

  getRecipeNames() {
    if(localStorage.getItem('recipes') === null) {
      let recipes = [
        {"name":"Spaghetti", "ingredients": "Meat, Pasta"},
        {"name":"Bread", "ingredients": "Dough, Salt"},
      ]
      localStorage.setItem('recipes', JSON.stringify(recipes))
      return ['Spaghetti', 'Bread']
    } else {
      let localRecipes = JSON.parse(localStorage.getItem('recipes'))
      let localRecipeNames = localRecipes.map(recipe => {
        return recipe.name
      })
      return localRecipeNames
    }
  }

  close() {
    this.setState({
      showModal: false,
      titleVal: '',
      ingredientsVal: ''
    })
  }

  open(recipe = '', ingredients = '', id = 12345) {
    this.setState({
      showModal: true,
      titleVal: recipe,
      ingredientsVal: ingredients,
      id
    })
  }

  delete() {
    if(this.state.id !== 12345) {
      let newList = JSON.parse(localStorage.getItem('recipes'))
      newList.splice(this.state.id, 1);
      localStorage.setItem('recipes', JSON.stringify(newList))
    }
    this.setState({
      recipes: this.getRecipeNames()
    })
    this.close()
  }

  save() {
    let newList = JSON.parse(localStorage.getItem('recipes'))
    if(this.state.id === 12345) {
      newList.push({"name": this.state.titleVal, "ingredients": this.state.ingredientsVal})
      localStorage.setItem('recipes', JSON.stringify(newList))
    } else {
      delete newList[this.state.id]
      newList[this.state.id] = {"name": this.state.titleVal, "ingredients": this.state.ingredientsVal}
      localStorage.setItem('recipes', JSON.stringify(newList))
    }
    this.setState({
      recipes: this.getRecipeNames()
    })
    this.close()
  }

  getValidationState() {
    const length = this.state.ingredientsVal.length;
    if (length > 1) return 'success';
    else if (length > 0) return 'warning';
    else if (length === 0) return 'error';
  }

  handleChange(e, type) {
    type === 'title' ? (
      this.setState({
        titleVal: e.target.value
      })
    ) : (
      this.setState({
        ingredientsVal: e.target.value
      })
    )
  }

  render() {
    const recipes = this.state.recipes.map((recipe, idx) => {
      let localRecipes = JSON.parse(localStorage.getItem('recipes'))
      let ingredients = localRecipes[idx].ingredients
      return <li key={idx}><Button
        bsStyle="primary"
        onClick={() => this.open(recipe, ingredients, idx)}>Edit</Button>{recipe}</li>
    })

    return (
      <div>
        <h2>Box</h2>
        <ul>
          {recipes}
        </ul>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.open()}
          >
          Add Recipe
        </Button>

        <ModalViewer
          showModal={this.state.showModal}
          titleVal={this.state.titleVal}
          ingredientsVal={this.state.ingredientsVal}
          handleChange={e => this.handleChange(e, 'title')}
          handleChangeI={e => this.handleChange(e, 'ingredients')}
          getValidationState={() => this.getValidationState()}
          delete={() => this.delete()}
          save={() => this.save()}
          close={() => this.close()}
          />

      </div>
    )
  }
}

export default Box
