First of all install nextjs with its dependcies by follwong command
npx create-next-app@latest --ecommerce-admin --typescript --tailwind --eslint

Need to install the following packages:
create-next-app@13.4.7
Ok to proceed? (y) y
√ Would you like to use `src/` directory with this project? ... No
√ Use App Router (recommended)? ... Yes
√ Would you like to customize the default import alias? ... No

switch to the project by
cd ecommerce-admin

install shadcn https://ui.shadcn.com/docs/installation

npx shadcn-ui@latest init
√ Which style would you like to use? » Default
√ Which color would you like to use as base color? » Slate
√ Where is your global CSS file? ... app/globals.css
√ Do you want to use CSS variables for colors? ... yes
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... yes
√ Write configuration to components.json. Proceed? ... yes

install Button from shadcn
npx shadcn-ui@latest add button

Now run the project
npm run dev

now close the project and do some changes

page.tsx remove everything simply heelo world

create (root) folder under app and indise it (routes) folder create page.tsx and remove old page.tsx

in layout,tsx change title and des

in global.css add
html,
body,
:root {
height: 100%;
}

run project
npm run dev

clerk authuntication create account at clerk https://dashboard.clerk.com/apps/app_2Rt78I0whS4kB5gUqJ1WQUzNC3P/instances/ins_2Rt78FkqswSX11Y7NTUEFiePznl? and create a project

npm install @clerk/nextjs

in layout
import clerprovider and wrap html and body into clerkProvider tag
import { ClerkProvider } from '@clerk/nextjs'
return (
<ClerkProvider>
<html lang="en">
<body className={inter.className}>{children}</body>
</html>
</ClerkProvider>
)

add .env file to gitignore

Set Environment Keys and paste into env file

create middleware.ts file in the root and paste the code from the document of the clerk

create the folder structure for sign-in as mentioned blow
app => (auth) => (routes) => sign-in => [[...sign-in]] => page.tsx
create the folder structure for sign-up as mentioned blow
(routes) => sign-in => [[...sign-up]] => page.tsx

import userbutton in page.tsx
import { UserButton } from "@clerk/nextjs";
<UserButton afterSignOutUrl="/"/>

run the project

npm run dev

now install dialogbux from shadcn ui
npx shadcn-ui@latest add dialog

create new file inside component folder modals.tsx

install library zustand for state management
npm install zustand

run project npm run dev

create new folder hooka in the roots and within create use-store-modal.tsx file

create modal.tsx under components and under ui

create new folder modals in the component
create file store-modal.tsx

create a new folder in the root called Provider so our modal shouls be available all the time create new file modal-provider.tsx

place <ModelProvider/> above the children in layout and properly import it

trigger it into root page.tsx

install form and input from shadcnui
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input

now run the project
npm run dev

add form to storeModel

now install prisma packages to connect planetscale

now install 
npm i D prisma
after that run this command
npm install @prisma/client

now run  command

npx prisma init


 create new file under lib folder
 prismadb.ts

 go to the planet scale website https://planetscale.com/

 sigin or signup for database

 create database and click on create password then click on connect with prisma

 update .env file with database url
 update schema.prisma file

 now run command
 npx prisma generate


go to the app folder then layout check prisma generate update node

now push the database by following command
npx prisma db push

now run the project npm run dev

now create api folder under app and in api create store folder and init create route.ts file

go to component model store-model.tsx LOADING STATE

add package
npm i axios
now run the project npm run dev

now install package
npm i react-hot-toast

run the project npm run dev

create toast-provider.tsx in the providers

to use toast put toast provider in layout <ToastProvider />

now create new file toast-provider.tsx in providers

now in file store.model show the error and sucess by toast.error and toast.success

create new folder as follow
app => (dashboard) => [storeId] => layourt.tsx

now create 
[storeId] => (routes) page.tsx

stop the project
create new file under (root) folder layout.tsx

save and close all files

now run project npm run dev

now stop the application

to reset model

npx prisma nigrate reset

it will delete all the data base
Database reset successful

now again generate it

npx prisma generate

again run

npx prisma db push

run the project npm run dev

now open filde store-modal.tsx


now insert window.location.assign(`/${response.data.id}`)  
it will complete refresh 

now in page.tsx in dashbaord

now in dashboard layout.tsx import <Navbar/>

create navbar.tsx under the components and import MainNav in this

create main-nav.tsx under the components

now install combobox from shadcn for this first install popover from shad cn
npx shadcn-ui@latest add popover
and then install command
npx shadcn-ui@latest add command

run the project npm run dev

create new file store-switcher.tsx unser component folder

create new folder inside app dashboard routes
settings

inside setting create new file page.tsx

create settingsform component inside the setting create components folder insdie of setting and inside component create new file settings-form.tsx

create new file heading.tsx under components and UI

install component Seprator from shadcn ui
npx shadcn-ui@latest add separator

now again run the project npm run dev

now create route.ts in the app/api/stroe/[storeId]

update data

now  reate alert-modal.tsx file in components modals

now update delete function in setting-form.tsx amd import alert modal in app (dashboard)

and check by deleting the items

now update main-nav-bar

now instal alet boc from shadecn ui 
npx shadcn-ui@latest add alert

mow create component api-alert.tsx in components ui

now instal badge from shadcn ui
npx shadcn-ui@latest add badge

Create new hook
use-origin.tsx

write origin file and now go back app folder dashboard routes setting component and setting form write in the description 
description= {`${origin}/api/${params.storeId}`}

now in schema.prisma file
install extension prisma for vs code

write in prisma file for Billboard



now in the root Setuplayout and 
const billboard = await prismadb.billboard if error then run 

npx prisma generate
now it will remove error now you can remove above const billboard from layout

now push on the planet scale

npx prisma db push

now run npm run dev

now create nav for billboard in main-nav.tsx

now build the billboard page create new folder billboards and inside create page.tsx
app => (dashboard) => [storeId] => (routes) => billboards =>page.tsx

now import a component <BillboardClient />

now build component BillboardClient  create components filder inside of this billborads folder create file client.tsx

create new folder inside of billboards folder [billboardId] and create page.tsx
copy the setting-form and create a new folder in [billboardId] called coponents paste it here and rename it billboard-form

To upload images create account on https://cloudinary.com/
and 
https://next-cloudinary.spacejelly.dev/

npm install next-cloudinary

npm run dev

copy configure NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>" and paste in into .env file <Your Cloud Name> will replace with cloudinary dashbaord cloud name

creat new file impage-upload.tsx in components under ui

login to cloudunary website and click on the setting icon on bottom left side then click upload and click on add upload preset and sigining mode to unsigined and save changes copy the upload presest name and paste in to image-upload.tsx
<CldUploadWidget onUpload={onUpload} uploadPreset="hi1wn04q">

for error made changes in the next.config.js file 
const nextConfig = {
    images: {
        domains: [
            'res.cloudinary.com'
        ]
    }
}

create a new folder in the api [storeId] then billboards and inside route.ts

Create new folder [billboardId] inside billboards and create route.ts folder and go into [storeId ] copy everything from route.ts and  paste it [billboardId] route.ts


from shadcn ui install data table

npx shadcn-ui@latest add table
Add tanstack/react-table dependency:
npm install @tanstack/react-table

npm run dev

copy columns.tsx and create new file within client.tsx


install a package to createAt to string date or formate the 
date-fns
npm i date-fns

npm run dev

now copy setp 2 from shad cn ui and create data-table.tsx under the ui

add pagination to data table

add filtering

now create new file cell-action.tsx with client and columns.tsx files

now for cellaction install dropdown from shadcn ui
npx shadcn-ui@latest add dropdown-menunpm

npm run dev

in compponent under ui create new file api-list
 develop the component and import it into client.tsx

 











































