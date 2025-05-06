npx create-next-app@latest frontend_dir_name
npx create-next-app@latest frontend_dir_name --typescript // init with typescript

    Would you like to use TypeScript? = Yes
    Would you like to use ESLint? = Yes
    Would you like to use Tailwind CSS? = Yes
    Would you like your code inside a `src/` directory? = Yes
    Would you like to use App Router? (recommended) = Yes
    Would you like to use Turbopack for `next dev`? = No // Turbopack gives faster development experience but is still under development so possible errors
    Would you like to customize the import alias (`@/*` by default)? = No // default next js import works well in all the cases
    
BASE SETUP
>> this is how the src structure will look like after initialization 
    src
    └───app
            favicon.ico
            globals.css
            layout.tsx
            page.tsx

>> here is the structure for a 3 page application with main "/", about "/about", and projects "/projects" page
    src
    └───app
        │   favicon.ico
        │   globals.css
        │   layout.tsx
        │   page.tsx          ← This is your home page (e.g., Landing or Portfolio)
        ├───about
        │   └───page.tsx      ← About Me page
        ├───projects
        │   └───page.tsx      ← Projects page


All core React hooks:
>> useState – for local component state
>> useEffect – for side effects
>> useContext – for global/shared state
>> useReducer – for complex state logic
>> useRef – for DOM references or persistent values
>> useMemo, useCallback – for performance optimization
>> useLayoutEffect, useImperativeHandle – for DOM manipulation
>> useId – useful for generating consistent IDs in SSR/CSR

Next.js App Router Hooks (from next/navigation)/ These replace what you'd use in react-router-dom:
>> useRouter()	Similar to React Router's useNavigate(). Use router.push("/about") to navigate.
>> useParams()	Get dynamic route params from the URL (e.g., /projects/[id]).
>> usePathname()	Get the current URL path (/about, /projects, etc).
>> useSearchParams()	Get query params like ?name=harsh from the URL.
>> useSelectedLayoutSegments()	For advanced routing layout analysis (rarely used in small projects).
>> useSelectedLayoutSegment()	Like above, but only for one segment.


Next Features that are not in ReactJs
>> File-based Routing	Create folders like /about/page.tsx to define routes.
>> Dynamic Routes	Use [id]/page.tsx to capture dynamic params.
>> Nested Layouts	Create layout.tsx inside folders for nested UIs.
>> Server Components	By default, components in /app are server-rendered for performance.
>> Client Components	Use "use client" directive for interactivity (state, hooks).
>> Loading UI	Add loading.tsx file for built-in suspense loading.
>> Error Handling	Add error.tsx file in a route to catch and show errors.
>> Metadata API	Define metadata in layout.tsx or page.tsx for SEO.
>> Streaming	Pages can stream content piece-by-piece by default.







NAMING CONVENTION
1. Component Folder Name   >>  PascalCase  >>  ProductCard/
2. Component File Name	Same as folder  >>  PascalCase  >>  ProductCard.tsx
3. CSS Module File >>  (camelCase || PascalCase)   >>  (productCard.module.css || ProductCard.module.css)
4. Shared Folder    >>  (non-component) >>  (kebab-case || camelCase)   >>  (utils/, lib/, hooks/)







>> APP DIRECTORY FOR NEXT JS "src/app/"

src/
└── app/
    ├── layout.tsx          // Root layout: wraps all pages (e.g., with header, footer)
    ├── page.tsx            // Home page (`/`)
    ├── about/
    │   ├── page.tsx        // `/about`
    ├── dashboard/
    │   ├── layout.tsx      // Layout only for dashboard routes
    │   ├── page.tsx        // `/dashboard`
    │   └── settings/
    │       ├── page.tsx    // `/dashboard/settings`
    └── globals.css         // Global styles (can be imported in root layout)


    layout.tsx example {

        // src/app/layout.tsx
        export const metadata = {
        title: 'My App',
        description: 'Welcome to my app',
        };

        export default function RootLayout({ children }: { children: React.ReactNode }) {
            return (
                <html lang="en">
                <body>
                    <header>My Header</header>
                    {children}
                    <footer>My Footer</footer>
                </body>
                </html>
            );
        }

    }



>> COMPONENTS DIRECTORY FOR NEXT JS "src/components/"

>>  for small to medium projects {

        src/components/
            ├── Header.tsx
            ├── Footer.tsx
            ├── Button.tsx
            └── Card.tsx

    }

>>  for big projects {

        src/components/
            ├── Header/
            │   ├── Header.tsx
            │   └── Header.module.css
            ├── Footer/
            │   └── Footer.tsx
            ├── Button/
            │   ├── Button.tsx
            │   └── Button.module.css
            └── index.ts     // Optional barrel file

}




In Next.js (and React in general), hydration is the process where React takes over a server-rendered HTML page and attaches event listeners to make it interactive in the browser.

What is a Hydration Mismatch?
A hydration mismatch occurs when the HTML content rendered on the server doesn't match what React generates on the client during hydration. This leads to errors like:


>> SEO Note: Why Moving a Section to a Page Improves SEO in Next.js
    
    When I move a section (like ProjectSection) to its own page (e.g., src/app/project) instead of keeping it inside a component folder (e.g., src/components/project), Next.js creates a separate HTML page for /project during build time (using static generation or server-side rendering).

>> This is beneficial for SEO because:

A new URL (/project) is created and can be indexed by search engines.
The page can have its own <title>, <meta description>, and other SEO metadata.
The content is pre-rendered as HTML, so it’s visible to crawlers even before JavaScript runs.
More pages = better site structure, internal linking, and more keyword targeting opportunities.

>> Summary:
"Placing sections in src/app/[page] instead of src/components makes them fully routable and crawlable by search engines, resulting in improved SEO through better structure, metadata, and discoverability.