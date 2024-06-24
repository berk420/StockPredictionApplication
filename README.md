## Web site url 
- https://main--stockanalysisandprediction.netlify.app/

## StockAnalysis
- Language: TypeScript
- Architecture : Componenet-based architecture (React-Next.js)
- Programig paradigms: Declarative, Imperative and Asynchronous  programing
- Commonly used architecture in React/Next.js Modular Architecture,so i used.

## StockAPI
- Programing paradigms: OOP
- Web server: Github pages (it's will be azure soon)
- Architecture: Service-oriented architecture (ASP.NET Web API)
- Used Attribute Routing for URLs map to controller actions
- Communication between Database and API Raw SQL

## CI/CD proccess
- It is deploying via main branch
- Host service are Netlify
- Instead deploying api I just using github pages for single endpoint
- The Endpoint that I deployed on TestEndpoint branch

# Some information about whole project
- Architecture are Three-Tier Architecture
- Presentation Layer: StockAnalysis
- Application Layer (Business Logic Layer): StockAPI
- Data Layer : PostgreSQL (you can fill db with StockDataCollector)
- The development model is Git Flow
- Database managment system: PostgreSQL

# Release Note

## Kruchten's 4+1 model view
- https://www.figma.com/board/UQGKP3BTS4itwd5rhNmBPm/Untitled?node-id=0-1&t=7yLDtRKVFqOBIc2h-1

## features will be added
- Show data by years
- Loading icon animation (during componenet loading )
- Iron and steel industry etc. will be added
- Change StockAPI controllers code structure as lambada expression and expresson tree
- Database need to be normalization 
- API have to be deployed via Azure app service
- Communication between Database and .NET web api will be Dapper
- Add Vendor (Redis) to API
- Route Constraints for API
- Content Negatiation for API
- More endpoint for spesific industry's balance sheet item in API (according to StockAnalyz)
- Iron and steel industry etc. will be added
- Query folder will be add for API
- More feature on the way...
- Fix the css names according to best practice


## 2.5.0 (Upcoming)
-Financial statement data can be compared in a 3D chart (with Thre.js library) 

## 2.4.0
- Current stock price information will be add and data will take via yfinance python library

## 2.3.0 
- Able to see the balance sheet values in gold basis
- Revise to ToolSide

## 2.2.0 
- UI developing
- Add a combo box to show the chart values ​​in which basis (TL, dollar)

## 2.1.0 
- You will be able to see the balance sheet values ​​in dollar basis
- Case Statement will be fix

## 2.0.0
- Frontend technologies chenged
- Javascript -> Typescript
- New Framework Next.js 
- Library added React.js, Google Fonts instead of DevExtreme

## 1.0.1
- Drawer and layout will be fix
- File stracture will be more readable
- Finallly, web site will be publish
- 


