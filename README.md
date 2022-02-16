# Facet component

## Screenshots

Initial component state:

![](screenshots/initial.png)

If you click on any label, the tree will be expanded

One level:

![](screenshots/expanded-1.png)

Two levels:

![](screenshots/expanded-2.png)

If you click on any child element checkbox, item will be marked as checked:

![](screenshots/selected-one.png)

If you click on any checkbox, selected item will be marked as checked or unchecked as well as all its children:

All items are selected:

![](screenshots/selected-all.png)

Items are unselected again:

![](screenshots/unselected-all.png)

## Usage

### Example

```js
<Facet items={items} onItemsChange={handleFacetItemsChange} />
```

You should convert items to facet format using function `convertCategoryItemToFacetItem`

```js
convertCategoryItemToFacetItem(r.data.categories)
```
After conversion, you can pass items to the Facet component.

You should also pass a callback using the `onItemsChange` property. The callback will be fired if the elements have changed (checked or expanded) and the updated elements will be returned.

## Interfaces

Category item interface for `convertCategoryItemToFacetItem` function:

```typescript
interface Category {
  id: string,
  count: number,
  parent: string,
  name: string,
}
```

Facet component interfaces:

```typescript
interface CategoryItem {
  id: string,
  count: number,
  parent: string,
  name: string,
}
```

```typescript
interface FacetItem extends CategoryItem {
  checked: boolean,
  expanded: boolean,
  children: string[];
}
```

```typescript
type FacetDictionary = Map<string, FacetItem>;
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
