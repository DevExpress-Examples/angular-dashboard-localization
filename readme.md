# Dashboard for Angular - Localization

The example shows how to localize the Dashboard component in an Angular application:

- Translate UI element captions to a different language: dialog boxes, buttons, menu items, error messages, etc.
- Format numbers, dates, and currencies according to specific culture settings.

![](img/web-dashboard-localization-de.png)

## Example Structure

The example has the following structure:

- The [asp-net-core-server](asp-net-core-server) folder contains the backend project built with ASP.NET Core 3.1.
- The [dashboard-angular-app](dashboard-angular-app) folder contains the client application built with Angular.

### Client Localization
<!-- default file list -->
*Files to look at*:

* [app.component.ts](./dashboard-angular-app/src/app/app.component.ts)

<!-- default file list end -->

The **dashboard-angular-app** project shows how to localize a client application with the [component-specific JSON files](https://docs.devexpress.com/Dashboard/402538/web-dashboard/dashboard-component-for-angular/localization#localize-ui) for the German market (the `de` culture). Intl is used to format dates, numbers, and currencies.

### Server Localization
<!-- default file list -->
*Files to look at*:

* [Startup.cs](./asp-net-core-server/Startup.cs#L45)

<!-- default file list end -->

Since the Web Dashboard exports data on the server side, you need to localize the server to complete the localization process. The **asp-net-core-server** project contains satellite resource assemblies for the German culture.


## Quick Start

In the **asp-net-core-server** folder run the following command:

```
dotnet run
```
> This server allows CORS requests from _all_ origins with _any_ scheme (http or https). This default configuration is insecure: any website can make cross-origin requests to the app. We recommend that you specify the client application's URL to prohibit other clients from accessing sensitive information stored on the server. Learn more: [Cross-Origin Resource Sharing (CORS)](https://docs.devexpress.com/Dashboard/400709)

In the **dashboard-angular-app** folder, run the following commands:

```
npm install
npm start
```

Open ```http://localhost:4200/``` in your browser to see the result.

## Documentation

- [Localize Dashboard Component for Angular](https://docs.devexpress.com/Dashboard/402538/web-dashboard/dashboard-component-for-angular/localization)


## More Examples

- [Dashboard for React - Localization](https://github.com/DevExpress-Examples/react-dashboard-localization)
- [Dashboard for Vue - Localization](https://github.com/DevExpress-Examples/vue-dashboard-localization)
- [Dashboard Control for JavaScript Applications - Localization](https://github.com/DevExpress-Examples/javascript-dashboard-localization)

- [ASP.NET Core Dashboard Control - Localization](https://github.com/DevExpress-Examples/asp-net-core-dashboard-localization)
- [ASP.NET MVC Dashboard Extension- Localization](https://github.com/DevExpress-Examples/asp-net-mvc-dashboard-localization)
- [ASP.NET Web Forms Dashboard Control - Localization](https://github.com/DevExpress-Examples/asp-net-web-forms-dashboard-localization)
