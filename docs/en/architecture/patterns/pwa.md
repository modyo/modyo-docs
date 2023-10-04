---
search: true
---

# Progressive Web Applications

Progressive Web Applications (PWAs) are web applications that combine features of mobile applications and traditional web pages. They are developed using standard web technologies, such as HTML, CSS, and JavaScript, and stand out for their ability to function reliably and provide a complete user experience, even in conditions of limited or absent connectivity.

Advantages of PWAs:

- **Installation on the device:** They can be installed on the user's device and accessed from the desktop or home screen, without the need for an application store.
- **Offline operation:** Thanks to the caching of modern browsers, PWAs can work with intermittent connections or without an Internet connection.
- **Push notifications:** They can notify users, as configured.
- **Device hardware access:** They can access the user's device's camera, GPS, and more.
- **Adaptability to different screen sizes:** Permitting unified experiences on different devices.
- **Automatic updates:** Ensuring that users always have the latest version of the application.


### Native AppShell

AppShells package PWAs for distribution in application markets. Internally, they implement a WebView that provides the user experience. They are also used to extend the functionality of the web application with platform-specific native elements.

:::warning WebView vs. Native Browser
WebView differs significantly from the device's native browsers, which may limit some native PWA's functions.
:::

### PWA limitations on iOS

PWAs can have limitations on iOS due to:

- **Browser limitations:** On iOS, available browsers, such as Safari, have certain limitations in terms of supporting web functions and technologies. This can affect the performance and functionality of PWAs compared to other, more modern, web-standards-compliant browsers.
- **Notification service limitations:** Push notifications are an important feature of PWAs, but only Safari and Firefox browsers currently support them on iOS.
- **Caching issues:** Caching PWA resources can be more restrictive on iOS than on other platforms. This can lead to some functionalities not working properly or to problems with content updates.
- **Background execution limitations: ** iOS has strict restrictions on running code in the background to save battery and improve performance. This can affect the ability of a PWA to function properly in situations where continuous background processing is required.

Apple is working on improving PWA support on iOS and has introduced new features in newer versions of the operating system. However, there are still limitations compared to other platforms.

Although some features may not be available or may have slightly lower performance compared to other platforms, numerous PWAs are functional and useful on iOS.

:: :tip Tip
We recommend testing and evaluating specific PWA compatibility on target devices and browsers to ensure an optimal experience.
:::


### Trusted Web Activities

Google's Trusted Web Activities (TWA) allows you to package a PWA into a native application on Android, providing a native experience and benefits of PWAs. You can use the Android user interface, such as the navigation bar and status bar, to display and run a PWA, providing an experience similar to that of a native application.

The biggest benefit of using TWA is taking advantage of PWAs, such as the ability to instantly update and cross-platform compatibility, while providing a native look and user experience on Android. Users can install the PWA from the Android app store and access it from the application launcher as if it were a native application.

TWA works using Chrome Custom Tabs, a variant of Chrome integrated into the native application. This makes it possible to display the content of the PWA using the Chrome rendering engine and to take advantage of the security and performance features of the Chrome browser.


### TWA on iOS

Apple doesn't have functionality equivalent to TWA on iOS. However, it has introduced some features to improve the PWAs experience on iOS devices, such as:

- **Add to home screen: ** Allows users to add a shortcut to a PWA on the home screen. The PWA will run in the Safari browser in full screen.
- **Web Application Manifest: ** Allows you to customize the appearance and behavior of a PWA on iOS using a JSON file that describes the PWA and its characteristics, such as name, icons, thematic colors, and orientation.
- **Service Workers: ** A technology that allows you to cache resources, operate offline, and improve the performance of a PWA. Although Apple has introduced limitations on running Service Workers in the background on iOS, they can still be used to improve the PWA experience while active in the Safari browser.

These features don't offer an identical TWA experience, but they can improve the PWAs experience on iOS.

:: :warning Updates
Apple may introduce changes or new functionality in future updates. It is recommended to follow Apple's updates and development guidelines to take full advantage of the capabilities of PWAs on iOS.
:::


### PWAs use cases

Some outstanding examples of Progressive Web Applications (PWA) that show the versatility and effectiveness of this technology are:

- **Twitter Lite: ** A lightweight version of the X application (formerly known as Twitter) that is designed to be fast and efficient in consuming data. It offers an experience similar to the native application, with features such as push notifications and offline access.
- **Pinterest:** Pinterest's PWA was able to significantly increase the user engagement rate and the time they spend on the platform. It provides a smooth user experience with fast loading times.
- **Spotify Web Player: ** Allows users to listen to music and access their playlists without the need to download a separate application. It works on different platforms and browsers.
- **Starbucks:** Starbucks's PWA allows customers to view the menu, customize their orders, and add them to the cart, even when they are offline. Once the connection is restored, they can complete the purchase.
- **Uber: ** The web version of Uber is a PWA that offers a user experience similar to the native application but with a faster loading time and lower data consumption.
- **Forbes: ** This magazine's PWA offers a faster and more engaging reading experience. The application quickly loads content and allows readers to continue reading offline.
- **Alibaba:** The Chinese e-commerce giant developed a PWA to improve the mobile experience for its users. They were able to increase conversions and user engagement on mobile devices.
- **OLX: ** Global online marketplace that uses a PWA to provide a faster and more efficient browsing experience, resulting in increased user engagement and retention.
- **Flipkart Lite: ** Flipkart, one of India's largest online retailers, created its PWA to offer an efficient shopping experience with offline access and push notifications.
- **The Washington Post: ** Your PWA provides a fast and smooth reading experience. Readers can access the articles and continue reading offline.

Through these examples, we can see how different industries and companies are using PWAs in different contexts to improve the user experience, increase participation and achieve their key business objectives.


### Implementing PWA with Modyo

Modyo offers native support for working with PWAs, allowing any web application developed in it to take control of the required technological enablers, such as the Service Worker and the PWA manifest file. Modyo provides an editing environment for these and is responsible for updating the modifications on the different devices.

Beyond the control of these enablers, the rest of the PWA is a common Web application, so the user experience and its adaptation to different devices and screen sizes depends directly on who implements them.

:: :tip Native App Shells
Web applications created on Modyo can be implemented as native applications using App Shells developed for each platform.

The use of native App Shells allows the inclusion of applications in official stores, such as the Google Play Store or the Apple App Store. App Shells are implemented as custom code projects and can make use of the device's native SDKs, thus increasing their capabilities compared to traditional PWAs.

If you want to receive more information about this packaging technique and how our [team of experts] (https://modyo.com/services) can advise or collaborate with your development, do not hesitate to contact us.
:::
