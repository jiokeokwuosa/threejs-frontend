# 3D Display

## Interface requirements:
- The header is made up of static content: a logo and a title.
- The 3D viewer displays randomly placed and randomly coloured 3D cubes for each starship
- The sidebar displays a list of starships and the number of times the corresponding geometry was clicked on in the 3D viewer
- Hovering on a 3D cube in the 3D viewer should highlight the corresponding name in the sidebar list
- Clicking on a 3D cube  in the 3D viewer should increment the corresponding value in the sidebar list
- The values displayed in the sidebar should be persisted in a mongo database and used as initial values when refreshing or relaunching the application
- More functionality than the bare minimum (Shadows,Animation,Orbital controls)
- Unit testing and relevant documentation

## Technologies

- React JS
- Redux
- Three JS

## Requirements and Installation

To install and run this project you would need to have installed:
- Node Js
- Git
- Clone the project and run with the commands below

To run frontend:
```
$ git clone https://github.com/jiokeokwuosa/scaled-robotics-frontend.git
$ npm install
$ npm start
```

## UI
![Screenshot (445)](https://user-images.githubusercontent.com/33726993/146699316-f0f7e957-2b47-4653-a210-adfe223d9463.png)
![Screenshot (446)](https://user-images.githubusercontent.com/33726993/146699318-eb839f59-9a48-472b-a7c2-b6a463c948cd.png)

## Testing
$ npm test (not complete)

## Author

Okwuosa Chijioke (Okwuosachijioke@gmail.com)

## License

This is licensed for your use, modification and distribution under the [MIT license.](https://opensource.org/licenses/MIT)
