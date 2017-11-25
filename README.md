# Simple React Gallery

The purpose is to have a skeleton reacy gallery component. So the app is as
minimal as possible.

# Install

```
git clone git@github.com:KenleyArai/simple-react-gallery.git
cd simple-react-gallery
yarn start
```

# Walkthrough

The gallery app expects a payload that looks like this:

```
var payload = {
  url:
    "https://yoururl.com/dir_with_pics/",
  count: 9
};
```

The url is the base url in your gallery. It expects you to have your directory
to be formatted as follows:

```
https://yoururl.com/dir_with_pics/1.jpg
https://yoururl.com/dir_with_pics/2.jpg
https://yoururl.com/dir_with_pics/...
https://yoururl.com/dir_with_pics/9.jpg
```

# Example

```
import React from "react";
import ReactDOM from "react-dom";
import Gallery from 'containers/Gallery';

var payload = {
  url:
    "https://yoururl.com/dir_with_pics/",
  count: 9
};

ReactDOM.render(<Gallery {...payload} />, document.getElementById("root"));
registerServiceWorker();
```
