module.exports ={
    assets: ['./src/Assets/Fonts'],
    dependencies: {
        "react-native-vector-icons": {
          platforms: {
            ios: null,
          },
        },
    },
    project: {
        ios: {
          sourceDir: "./ios",
        },
        android: {}, // grouped into "project"
      },
}