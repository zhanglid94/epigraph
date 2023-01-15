# Getting start

```
yarn
```

```
// For starting NextJs Server run
yarn next-dev
```

NextJs Server will start in `localhost:3000`

# Folder Structure

```
/packages
	/landing [NextJs version of the project]
```

# Stack We Have Used

1. Lerna (A tool for managing JavaScript projects with multiple packages. https://lernajs.io)
2. Yarn Workspace
3. React Js and Next Js
4. Styled System and Styled Components
5. Firebase Deployment.
6. Vercel Deployment.

# Development

Follow the below procedure to go with the development process.

# Deployment

For deploying your final project you have to build your project first. To build the project you have to follow below procedure.

### NextJs

To build the nextjs version run below commands.

```
yarn next-build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.

yarn next-start
```

We removed the `next-export` support from our template and we recommend to use `next-build` and `next-start` to run our template.

But if you want to use ‘next-export’, then at first please go to packages->landing->next.config.js and replace the code with

const nextConfig = {
images: {
domains: ['pbs.twimg.com'],
loader: 'akamai',
path: '',
},
};

Then , run `next build && next export` in your terminal.

## Running with Docker

To run the SuperProps Next.js app in docker

```
yarn next-export
docker build -t superprops/landing-next -f ./packages/landing/Dockerfile .
docker run -it -p 3000:3000 superprops/landing-next:latest
Open http://localhost:3000
```

# Deployment Support

## vercel.com

### NextJs

For deploying nextjs on vercel.com go to `packages/landing`. Now run below command .

```
vercel
```

> **Make sure you have `vercel-cli` installed in your system.**

## Firebase

### NextJs

Add your project ID at `packages/landing/.firebaserc`

Then, To deploy to your site, run the following command from the `packages/landing` directory.

```
yarn deploy
```

> **Make sure you have `firebase-tools` installed on your machine.**

## Netlify

At first, open an account on netlify and go to `sites` tab.

### NextJs

Run the below command to make the project netlify deploy ready from `packages/landing`.

```
yarn next build && next export
```

After running the above command go to `/landing` folder. You will find a `out` folder there. Drag
and drop this `out` folder on netlify `sites` tab. Now after finishing the upload you are ready to go.
