---
search: true
---

# Progressive Web Applications

Progressive Web Applications (PWAs) are web applications that combine features of mobile applications and traditional web pages. They are developed using standard web technologies, such as HTML, CSS and JavaScript, but are characterized by their ability to function reliably and provide a rich user experience, even in conditions of limited or absent connectivity.

PWAs offer several advantages. On the one hand, they can be installed on the user's device, so that they can be accessed from the desktop or the home screen of the mobile device, without the need for an application store. In addition, they can work in disconnected mode or with intermittent connections, thanks to the caching capacity of modern browsers. This allows users to access and navigate the application even without an Internet connection.

Other key features of PWAs include push notifications, access to the device's hardware (such as the camera or GPS), responsiveness and adaptability to different screen sizes, and automatic updates to ensure that users always have the latest version of the application.

### Native AppShell

AppShells allow you to package a PWA to be distributed in the application markets of the different providers. In essence, the AppShell internally implements a WebView that is responsible for presenting the experience to the user.

Another common use of AppShells is when you want to extend the functionality of the web application with native elements dependent on each platform.

:::warning WebView vs Native Browser
WebView technology differs significantly from native browsers within the device, so many of the native features present in the PWA standard will not be available in WebView.
:::

### PWA limitations on iOS

The main reasons PWAs may have limitations on iOS are:

- **Browser limitations:** On iOS, available browsers, such as Safari, have certain limitations in terms of supporting web functions and technologies. This can affect the performance and functionality of PWAs compared to other, more modern, web-standards-compliant browsers.
- **Notification service limitations:** Push notifications are an important feature in PWAs for sending updates and notifications to users. However, on iOS, only Safari and Firefox browsers currently allow the use of push notifications, while other browsers may not support this functionality.
- **Caching issues:** On iOS, caching the resources of a PWA can be more restrictive compared to other platforms. This can lead to some functionality not working properly or to problems with updating content in the PWA.
- **Background execution limitations: ** iOS has strict restrictions on running code in the background to save battery and improve performance. This can affect the ability of a PWA to function properly in situations where continuous background processing is required.

Importantly, Apple has been gradually improving PWA support on iOS and has introduced new features in newer versions of the operating system. However, there are still some limitations compared to other platforms.

Despite these limitations, many PWAs are still functional and useful on iOS, although some features may not be available or may have slightly lower performance compared to other platforms. It's always recommended to test and evaluate specific PWA compatibility on target devices and browsers to ensure an optimal experience.

### Trusted Web Activities

Trusted Web Activities (TWA) is a technology developed by Google that allows you to package a Progressive Web App (PWA) within a native application on Android. With TWA, you can use Android's native user interface, such as the navigation bar and status bar, to display and run a PWA, providing an experience similar to that of a native application.

The main advantage of using TWA is that you can take advantage of PWAs, such as the ability to instantly update and cross-platform compatibility, while providing a native look and user experience on Android. Using TWA, users can install the PWA from the Android app store and access it from the app launcher as if it were a native app.

TWA works using Chrome Custom Tabs, which is a variant of Chrome integrated into the native application. This makes it possible to display the content of the PWA using the Chrome rendering engine and to take advantage of the security and performance features of the Chrome browser.

### TWA on iOS

Currently, Apple does not have functionality directly equivalent to Trusted Web Activities (TWA) that allows you to package Progressive Web Apps (PWA) within a native application on iOS.

However, Apple has introduced features and improvements to iOS to improve the web application experience on iOS devices. Some of these features are:

- **Add to Home Screen:** iOS allows users to add a shortcut to a PWA on their device's home screen, providing an experience similar to that of a native application. When you open the shortcut from the home screen, the PWA will run in the Safari browser in full screen.
- **Web App Manifest:** The Web App Manifest is a JSON file that describes the PWA and its characteristics, such as name, icons, thematic colors, and orientation. By correctly defining the manifest, you can improve the appearance and experience of the PWA on iOS.
- **Service Workers:** Service Workers are a technology that enables resource caching, offline functionality, and the improvement of the performance of a PWA. Although Apple has introduced limitations on running Service Workers in the background on iOS, they can still be used to improve the PWA experience while active in the Safari browser.

While these features are not an identical solution to TWA, they offer options to improve the PWAs experience on iOS devices. It's important to note that technologies and capabilities may evolve over time, and Apple may introduce changes or new functionality in future iOS updates. It is recommended to follow Apple's updates and development guidelines to take full advantage of the capabilities of PWAs on iOS.

### How do you implement a PWA with Modyo?

The Modyo platform has native support for working with PWA, allowing any Web application developed on it to take control of the required technological enablers, such as the Service Worker and the PWA manifest file. Modyo provides an editing environment for these enablers and is responsible for updating the modifications on the different devices.

Beyond the control of these enablers, the rest of the PWA will be a common Web application, so the user experience and the adaptation of these to different devices and screen sizes depend directly on who implements them.

:::tip Native App Shells
Web applications created in Modyo can be implemented as native applications within a shell or App Shell developed for each platform. The use of native App Shells will also allow the inclusion of applications in official stores, such as the Google Play Store or the Apple App Store. App Shells are implemented as custom code projects and can make use of the device's native SDKs, thus increasing their capabilities compared to traditional PWAs.

If you would like to receive more information about this packaging technique and how one of our experts could advise or collaborate with your development, do not hesitate to contact a Modyo sales or customer executive.
:::
