---
search: true
---

# Progressive Web Applications (PWA)

Progressive Web Applications (PWAs) are web applications that combine features of mobile applications and traditional web pages. Developed with standard web technologies (HTML, CSS, JavaScript), they stand out for their ability to function reliably and offer a complete user experience, even with limited or no connectivity.

Advantages of PWAs:

- **Installation on the device**: They can be installed on the user's device and accessed from the desktop or home screen, without the need for an application store.
- **Offline operation**: Thanks to the caching of modern browsers, PWAs can work with intermittent connections or without an Internet connection.
- **Push notifications**: They allow sending notifications to users, according to the configuration.
- **Access to device hardware**: They can access the camera, GPS, and other device resources.
- **Adaptability to different screen sizes**: They unify the experience on various devices.
- **Automatic updates**: They ensure that users always have the latest version of the application.


### Native AppShell

AppShells package PWAs for distribution in application stores. Internally, they implement a WebView that provides the user experience and are used to extend the functionality of the web application with native elements specific to each platform.

:::warning WebView vs Native Browser
WebView differs significantly from native browsers, which can limit some native PWA functions.
:::

### Limitations of PWAs on iOS

PWAs may have limitations on iOS due to:

- **Browser limitations**: Browsers on iOS (e.g., Safari) have limitations in supporting web functions and technologies, which can affect the performance and functionality of PWAs.
- **Notification service limitations**: Only Safari and Firefox support push notifications on iOS.
- **Caching issues**: Caching PWA resources can be more restrictive on iOS, which can cause functionality or content update issues.
- **Background execution limitations**: iOS restricts background code execution to optimize battery and performance, which can affect a PWA's ability to function correctly in situations that require continuous processing.

Apple is improving PWA support on iOS with new functionalities in recent versions of the operating system, although limitations persist compared to other platforms.

Although some features may not be available or may have slightly lower performance, numerous PWAs are functional and useful on iOS.

:::tip Tip
It is recommended to perform tests and evaluate the specific compatibility of the PWA on the target devices and browsers to ensure an optimal experience.
:::


### Trusted Web Activities

Google's Trusted Web Activities (TWA) allows packaging a PWA into a native application on Android, providing a native experience and PWA advantages. You can use the Android user interface, such as the navigation bar and status bar, to display and run a PWA, providing an experience similar to that of a native application.

The biggest benefit of using TWA is taking advantage of the advantages of PWAs, such as the ability to instantly update and cross-platform compatibility, while providing a native look and user experience on Android. Users can install the PWA from the Android application store and access it from the application launcher as if it were a native application.

TWA works using Chrome Custom Tabs, a variant of Chrome integrated into the native application. This allows displaying the content of the PWA using the Chrome rendering engine and taking advantage of the security and performance features of the Chrome browser.


### TWA on iOS

Apple does not have a functionality equivalent to TWA on iOS. However, it has introduced some features to improve the experience of PWAs on iOS devices, such as:

- **Add to home screen**: Allows users to add a shortcut to a PWA on the home screen. The PWA will run in the Safari browser in full screen.
- **Web application manifest**: Allows you to customize the appearance and behavior of a PWA on iOS using a JSON file that describes the PWA and its characteristics, such as name, icons, theme colors, and orientation.
- **Service Workers**: A technology that allows caching of resources, offline operation, and improved performance of a PWA. Although Apple has introduced limitations on the execution of Service Workers in the background on iOS, they can still be used to improve the experience of the PWA while it is active in the Safari browser.

These features do not offer an identical experience to TWA, but they can improve the experience of PWAs on iOS.

:::warning Updates
Apple may introduce changes or new functionalities in future updates. It is advisable to follow Apple's updates and development guidelines to make the most of the capabilities of PWAs on iOS.
:::


### Use cases of PWAs

Some outstanding examples of Progressive Web Applications (PWA) that show the versatility and effectiveness of this technology are:

- **Twitter Lite**: A lightweight version of the X application (formerly known as Twitter) that is designed to be fast and efficient in data consumption. It offers an experience similar to the native application, with features such as push notifications and offline access.
- **Pinterest**: Pinterest's PWA managed to significantly increase the user engagement rate and the time they spend on the platform. It provides a fluid user experience with fast loading times.
- **Spotify Web Player**: Allows users to listen to music and access their playlists without the need to download a separate application. It works on different platforms and browsers.
- **Starbucks**: Starbucks' PWA allows customers to view the menu, customize their orders, and add them to the basket, even when they are offline. Once the connection is restored, they can complete the purchase.
- **Uber**: The web version of Uber is a PWA that offers a user experience similar to the native application but with a faster loading time and lower data consumption.
- **Forbes**: This magazine's PWA offers a faster and more attractive reading experience. The application quickly loads the contents and allows readers to continue reading offline.
- **Alibaba**: The Chinese e-commerce giant developed a PWA to improve the mobile experience of its users. They managed to increase conversions and user engagement on mobile devices.
- **OLX**: Global online marketplace that uses a PWA to offer a faster and more efficient browsing experience, which resulted in an increase in user participation and retention.
- **Flipkart Lite**: Flipkart, one of the largest online retailers in India, created its PWA to offer an efficient shopping experience with offline access and push notifications.
- **The Washington Post**: Its PWA provides a fast and fluid reading experience. Readers can access the articles and continue reading offline.

Through these examples, we can see how various industries and companies use PWAs in different contexts to improve the user experience, increase participation, and achieve their key business objectives.


### Implementation of PWA with Modyo

Modyo offers native support for working with PWAs, which allows any web application developed in it to take control of the required technological enablers, such as the Service Worker and the PWA manifest file. Modyo provides an editing environment for these and is responsible for updating the modifications on the different devices.

Beyond the control of these enablers, the rest of the PWA is a common Web application, so the user experience and its adaptation on different devices and screen sizes depend directly on who implements them.

:::tip Native App Shells
Web applications created in Modyo can be implemented as native applications through App Shells developed for each platform.

The use of native App Shells allows the inclusion of applications in official stores, such as the Google Play Store or the Apple App Store. App Shells are implemented as custom code projects and can make use of the device's native SDKs, thus increasing their capabilities with respect to traditional PWAs.

If you want to receive more information about this packaging technique and how our [team of experts](https://modyo.com/services) can advise or collaborate with your development, do not hesitate to contact us.
:::