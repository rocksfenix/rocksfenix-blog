---
tags:
  - development
path: test-example-2
date: 2019-12-15T18:21:53.891Z
title: Santi Testing   2
description: >-
  d applications, components often contain a mix of controlled and uncontrolled
  behaviors. This is okay! If each value has a clear source of truth, you can
  avoid
---
In real world applications, components often contain a mix of controlled and uncontrolled behaviors. This is okay! If each value has a clear source of truth, you can avoid the anti-patterns mentioned above.

It is also worth re-iterating that getDerivedStateFromProps (and derived state in general) is an advanced feature and should be used sparingly because of this complexity. If your use case falls outside of these patterns, please share it with us on GitHub or Twitter!

This is much simpler and performs just as well as the derived state version!

When using memoization, remember a couple of constraints:

In most cases, you’ll want to attach the memoized function to a component instance. This prevents multiple instances of a component from resetting each other’s memoized keys.
Typically you’ll want to use a memoization helper with a limited cache size in order to prevent memory leaks over time. (In the example above, we used memoize-one because it only caches the most recent arguments and result.)
None of the implementations shown in this section will work if props.list is recreated each time the parent component renders. But in most cases, this setup is appropriate.

* This is soo cool!
* Awesome nince cool

```javascript
import { PureComponent } from 'react'
...

export default class Header extends PureComponent {
  constructor (props) {
    super(props)

    this.colorAnimationProps = {
      animationDuration: '0.4s',
      animationFillMode: 'forwards'
    }

    this.colorAnimationStyle = {
      toColor: {
        animationName: 'toColor',
        ...this.colorAnimationProps
      },
      toTransparent: {
        animationName: 'toTransparent',
        ...this.colorAnimationProps
      }
    }

    this.state = {
      colorAnimation: {},
      headerModal: null
    }
  }

  componentDidMount () {
    if (this.props.isColor) {
      this.setState({colorAnimation: this.colorAnimationStyle.toColor})
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('should go here')
    if (nextProps.isColor) {
      return {colorAnimation: this.colorAnimationStyle.toColor}
    }
    return {colorAnimation: this.colorAnimationStyle.toTransparent}
  }

  render () {
    ...
  }
}
```
