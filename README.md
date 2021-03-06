# Omnius Tables Project (Time limit 6 days)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5. No other package has been installed. SCSS was used with Typescript 3.5.3. Frontend challenge description is in the file in directory as `frontend-challenge.pdf`.

Project has **three** main modules.
- First one is of **Tables**.
- The second one is of **Configurations**. The table which is been rendered on the screen is fully customizable through the configuration file inside this module.
- Third one is for internationalization **i18n**. It has the config JSON file properly formatted for all the labels used inside the application with a service to provide the language labels to the app. 

## Design System
The design system has been created in the **tables.design-system.scss** file under the **Tables** module that has been imported in main **styles.scss** file of the project. It has the implementation of basic grid system along with all the helper classes commonly used for padding, margin, border etc.

### Table Module Components
Components inside the **components** folder are all independent components of sorting, filtering, searching etc.
It has a main parent component of **tables.component**  that is responsible for the communication between the independent table component and the service. Runtime injected component is also rendered from this component. 

Pagination has been implemented but not used in the url creation. It just logs the incoming event in the service, which means that it can be handled further. 

Table has an **Edit Mode** button. By switching it on, only then can the table values be modified. Once done, the button needs to be switched off for the changes to get them saved. As soon as the button is switched off, a call is sent to the server. Which you would be able to see when the loader starts to spin. But obviously the dummy data comes back and gets rendered. Same is the case with this feature. A log prints in the service function, which means that feature is ready. Just api integration is needed. 
Every cell edited, I get the latest value, + the column and the row index. Those can easily be sent to server, to modify the fields. Where we have the cursor. Cursor of row will get to the primary key and column number will give the desired to be modifed. 

I have tried to make the variable names and function names as descriptive as possible. I have also used debouncing feature of RXJS library so that the calls for search are minimized when the user is typing in the search box.

### Compilation
The project has been compiled with **aot** and **prod** flags as well before my last commit. 
I have tried to used to the services in singleton mode to increase efficiency for tree shaking while the app compiles for production.

Kindly open the chrome console while running the application, to get to know some helping logs. 

### Filter
The dropdown for filter gives the option to apply either both or single filter. Multiple filters can be applied at the same time as well. You can see the exact url being generated in the chrome debug console after every action. 

Apologies about the pathetic color scheme. I was trying to complete the functionalites as priority. The columns have alignment that can be changed in the config file in the configurations module by giving them width in the form of classes. The minus icon hides the column and the plus sign gives the open to see it again. Meanwhile the hidden columns also with their names, start to appear on top. Clicking the button displays the respective column again. 
