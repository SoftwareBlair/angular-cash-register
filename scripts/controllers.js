(function () {

  'use strict'

  const app = angular.module('registerApp')

  app.controller('menuCtrl', function () {

    this.food = [
      {
        id: 1,
        item: 'Pizza',
        price: 12.99
      },
      {
        id: 2,
        item: 'Salad',
        price: 5.99
      },
      {
        id: 3,
        item: 'Burger',
        price: 8.99
      },
      {
        id: 4,
        item: 'Cheese Burger',
        price: 9.99
      }
    ]
  })

  app.controller('cartCtrl', function () {

    this.subtotal = 0
    this.tax = 0
    this.total = 0

    this.basket = []

    this.add = (food) => {

      let itemArr = this.basket.map((data) => {
        return data.item
      })

      let itemIndex = itemArr.indexOf(food.item)

      if (itemIndex < 0)
      {
        this.obj = Object.assign({}, food)
        this.obj.quantity = 1
        this.basket.push(this.obj)
      }
      else
      {
        this.basket[itemIndex].quantity++
      }

      this.subtotal += food.price
      this.tax = this.subtotal * 0.08
      this.total = this.subtotal + this.tax

    }

    this.delete = (food) => {

      let itemArr = this.basket.map((data) => {
        return data.item
      })

      let itemIndex = itemArr.indexOf(food.item)

      if (food.quantity === 1)
      {
        this.basket.splice(itemIndex, 1)

        this.subtotal -= food.price
        this.tax = this.subtotal * 0.08
        this.total = this.subtotal + this.tax
      }
      else
      {
        this.basket[itemIndex].quantity--

        this.subtotal -= food.price
        this.tax = this.subtotal * 0.08
        this.total = this.subtotal + this.tax
      }

    }
  })

})();
