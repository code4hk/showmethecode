
# Chain & Curry

## What I bump into...after ES6..on webpack 3 react app x nodejs
1. I was doing perf tuning
2. with https://github.com/webpack-contrib/webpack-bundle-analyzer
3. https://webpack.js.org/guides/tree-shaking/
4. Yo LODASH so fat
 ![img](https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/074/0fb/0ac0ef8.jpg)
4. webpack failed to treeshake, try with this https://github.com/lodash/babel-plugin-lodash
5. Error with `_.chain` !


### [_.chain is a mistake?]( https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba)

## Thoughts:

### True Topic
Best practices for "chaining" with ESM + Async + Type check after ES6

### Lodash fp soln
- lodash fp (as in blog post)
-  ![test](http://www.datchley.name/content/images/2015/07/curry-function-closures.png)
4. Extra benefits: Type check when load modularly, while..
  - Flow: A *Static* Type Checker for JavaScript
    -  Limited to Run-time check as you can see at these custom builds solutions:
      -  https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin
      -  http://idangero.us/swiper/api/#custom-build

## is Chaining bad?
-  Chaining itself is good?...
  -  https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern

### Not done yet

#### What about Async? What about other similar API?
-  Similarly Bluebird is so fat, try to replace with [yaku](https://github.com/ysmood/yaku)
   - we also have the [flow!](https://github.com/ysmood/yaku#flowlist)
   - Many Many ways
   - Demos

### Still not satisfied

#### Promise hell
  1. http://rossboucher.com/await/#/9
  2. Fx scope problem
    - example 1
 ![](https://d2mxuefqeaa7sj.cloudfront.net/s_F8315D69F3F866FF242F65C853B9771E98B8D2D4DB8921D1AF0ED49A5B381CAB_1517163594464_image.png)
    - example 2 - demo2.test.js
  3. Less parmas a function take, more generic it is



## Further readings
- RxJS talk, on [duality](https://youtu.be/SCoRVa9wwp4)
- Some scenarios RxJS shines
  1. retry
  2. https://github.com/ReactiveX/RxJava/wiki/Backpressure
  3. [takeUntil](https://medium.com/@benlesh/rxjs-dont-unsubscribe-6753ed4fda87)

### Bigger picture
- Conclusion
  - Let's go for RxJS, if you have time to set up & learn
    - Promise interopable with RxJS
  -  Those API being similar e.g. .map / .filter / .flatMap / flow() / compose() is Not an co-incident
    1. Iterator - Observable duality, [paper]( http://csl.stanford.edu/~christos/pldi2010.fit/meijer.duality.pdf)
    2. [A General Theory of Reactivity](https://github.com/kriskowal/gtor)
