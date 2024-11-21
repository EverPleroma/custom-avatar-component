# Custom Avatar Component
A customizable avatar component for generating avatars.

## Installation
Install the component using <a href="https://www.npmjs.com/package/custom-avatar-component">NPM</a>

```
npm install custom-avatar-component
```


## Usage
1. Import custom element
```
import Avatar from 'custom-avatar-component';
```

2. Start using
```
<Avatar name="John Doe" /> 
```


### Basic Usage

```jsx
import React from 'react';
import {Avatar} from 'custom-avatar-component';

const App = () => {
  return (
    <div>
      <Avatar
        name="John Doe"
        size={100}
      />
    </div>
  );
};
```


### Props Options
| Attribute     | Options | Default | Description                                                                                      |
|---------------|---------|---------|--------------------------------------------------------------------------------------------------|
| `name`        | string  |         | Will be used to generate an avatar based on the initials of the person                          |
| `bgcolor`     | string  | black   | Gives the background color of the avatar                                                        |
| `size`        | number  | 200     | Size of the avatar                                                                              |
| `fontColor`   | string  | white   | Gives the color of the initials (text)                                                          |
| `radius`      | number  | 0       | Determines the shape of the avatar. A value of 0 gives a square. Larger values make it rounded. |





```
  <Avatar
  name="John Doe"
  size={100}
  bgcolor="#028593"
  fontColor="#560234"
/>
```

### Shapes

You can customize the shape of the avatar by passing a shape prop.


```jsx
<Avatar
  name="John Doe"
  size={100}
  radius={16}
/>
```

### Examples

#### Basic Usage

```jsx
  <Avatar
  name="John Doe"
  size={100}
  colors={colors}
  bgcolor="#028593"
  fontColor="#560234"
  radius={16}
/>
```

## Development
In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1.Install local dependencies:

```
$ npm install
```

2.To test your react-avatar and your changes, start the development server and open 
https://www.npmjs.com/package/custom-avatar-component

```
$ npm run dev
```

## Building


```
npm run build
```


## Testing


```
npm run test
```


## Contributing

Contributions are welcome! Please submit pull requests to this repository.
Fork the repo, then clone it using the following command (remember to replace the url with the url from your forked repo)

```
git clone (url from your forked repo)
```

Go to project folder

```
cd custom-avatar-component
```

Create your feature branch:
```
git checkout -b my-new-feature
```

Commit your changes: 
```
git commit -m 'Add some feature' 
```

Push to the branch: 
```
git push origin my-new-feature
```

Submit a pull request :D

## License

MIT License
https://opensource.org/license/MIT

Changelog

- 1.0.0: Initial release
- 1.0.1: Current version
