# GatsbyJS-NodeJS14.x-Template

## SAMPLE TEMPLATE
![hi](/src/images/lyrid_logo_large.png)
This template is for _language_ suitable for uploading to the Lyrid Platform.

## Prerequisites 
1. Register an account at [Lyrid Web Application](https://app.beta.lyrid.io/) 
2. Download our command line tool, [the lc](https://docs.lyrid.io/initialization)
3. Clone the repo 'git clone https://github.com/sample_here'

## Run locally with:
```
npm init gatsby
cd into your gatsby directory
npm run develop
```

Open http://localhost:8080

## Edit the names (optional):
Open .lyrid-definition and change the App and Module name, because this will override another applications with the same name in the platform.

## User can clone this repo, then Replace these variables in all files :
- YOUR_APP_NAME
- YOUR_MODULE_NAME
- YOUR_FUNCTION_NAME

To change your file information:
Open ```.lyrid-definition.YML``` file
Change ```name``` and ```module name``` to your choice and save.

### Start Coding!
Users can edit route url, settings, and views with custom APIs. 

### Submit to Lyrid 
*User can now deploy a Express web application using TypeScript.
Use our command line tool to easily upload your application to the cloud.
```
lc code submit
```

## Start hacking:

Edit the routes at /src/entry/entry.js with your custom API. 

Add more middlewares or your business logic in there.

## Notes:
Make sure user don't change the build output (`outDir`) in `tsconfig.json` as it will break the folder structure in deployment.

## Contact Us
Have any questions? We are here to help!
Email us at support@lyrid.io  

### Find us on social medias
- [Discord](https://discord.com/invite/xtCCtc9WAX)
- [LinkedIn](https://www.linkedin.com/company/lyrid/?viewAsMember=true)
- [Twitter](https://twitter.com/LyridInc)
- [Facebook](https://www.facebook.com/lyridinc)

<a href="https://app.lyrid.io/login?one-click-deploy=true&origin=github&repository-url=https://github.com/LyridInc/GatsbyJS-NodeJS14.x-Template.git&env=empty&project-type=GatsbyJS&repo-name=GatsbyJS-NodeJS14.x-Template">
  <button>
    <img src="/src/images/svg/ocd_deploy_to_lyrid.svg" style="height: 50px; width:200px;"/>
  </button>
</a>
