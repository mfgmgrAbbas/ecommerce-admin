First of all install nextjs with its dependcies by follwong command
npx create-next-app@latest --ecommerce-admin --typescript --tailwind --eslint

Need to install the following packages:
  create-next-app@13.4.7
Ok to proceed? (y) y
√ Would you like to use `src/` directory with this project? ... No 
√ Use App Router (recommended)? ...  Yes
√ Would you like to customize the default import alias? ... No 

switch to the project by
cd ecommerce-admin

install shadcn https://ui.shadcn.com/docs/installation

npx shadcn-ui@latest init
√ Which style would you like to use? » Default
√ Which color would you like to use as base color? » Slate
√ Where is your global CSS file? ... app/globals.css
√ Do you want to use CSS variables for colors? ...  yes
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ...  yes
√ Write configuration to components.json. Proceed? ... yes

install Button from shadcn
npx shadcn-ui@latest add button


Now run the project
npm run dev

now close the project and do some changes

page.tsx remove everything simply heelo world

create (root) folder under app and in root folder create page.tsx and remove old page.tsx

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

create new file inside component folder model.tsx
