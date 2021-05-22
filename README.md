# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Exercise

### Steps

1. Define a layout with header, side menu and content
2. Put a logo img in header
3. Create routes for:
   - Random quote
   - Anime quotes (print 10)
   - Character quotes (print 10)
4. Create api service (knows how to call api)
5. Create random quote service
6. Create anime service
7. Create quotes service
   - Quotes by anime
   - Quotes by character
8. Create a navigation list in side menu
9. /random
   - cards with random quotes
10. /anime-quotes
    - Cards with 1 anime quote
    - Button for load another quote (creates a new card with its quote)
    - Each card, has a character link to its character quotes
11. /character-quotes
    - Cards with 4 anime quotes
    - Button for load another quote (creates a new card with its quote)

## Configuring tailwind

      npm i -D tailwindcss@latest postcss@latest autoprefixer@latest
      npm i -D postcss-import@12 postcss-loader@4 postcss-scss@3
      ng add ngx-build-plus
      npx tailwindcss init

https://medium.com/tunaiku-tech/angular-11-tailwindcss-2-0-blazing-fast-cfa20ae3a5e9
