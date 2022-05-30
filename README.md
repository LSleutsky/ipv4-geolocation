# IPv4 Geolocation

This is a Next.js web application which allows a user to enter an IPv4 address into an input, and retrieve location information based on [Maxmind's GeoLite2](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data) service.

An option to also retrieve data based on the local machine's IPv4 address also exists in the core functionality.

## Build

Before beginning, clone the repo:

```bash
git clone git@github.com:LSleutsky/ipv4-geolocation.git
```

Or if you have the GitHub CLI installed, the repo can be cloned with:

```bash
gh repo clone LSleutsky/ipv4-geolocation
```

To run the app in typical fashion, the below commands can be run (_in order_):

```bash
yarn install
yarn dev
```

This will allow you to visit [http://localhost:3000](http://localhost:3000) to run the development version of the app.

## Docker

If _Docker_ is installed on the local machine where this repo is cloned, then for easier local development (_and the recommended way_), the below script handles everything for you to get up and running:

```bash
yarn start:local
```

### Docker Compose

The above script is equivalent to running the below command in a command shell:

```bash
docker-compose up
```

You can now visit [http://localhost:3000](http://localhost:3000) to interact with the app.

Though not specifically related to running - or using - the app, but for historical purposes, if needing to stop and remove containers (_and all dangling volumes associated to the container_), run the following shell command:

```bash
docker-compose down -v
```

### Docker Compose V2

If the option `Use Docker Compose V2` is enabled in _Docker Desktop_, then the above _Docker Compose_ commands can be ran with the below syntax:

```bash
docker compose up
docker compose down
```

If utilizing the _Docker Compose_ `yarn start:local` script, however, that is reliant on the `docker-compose` syntax, to account for _Docker Desktop_ being on the default _Docker Compose_ version.

## Interactivity

The below information describes the rendered UI elements and how to interact with them.

### `Enter IPv4 Address`

This input allows a user to enter an IPv4 address. The input field is blocked from entering characters that are not of an IPv4 format (_i.e 111.222.3.4_), which are valid integers from _0 to 9_, as well as the `.` symbol.

If there is focus on the input field, and no value is entered, or an incorrect format is entered, then there will be an error on removing focus from the input field. The input field will have a red outline and there will be an error message displayed asking the user to enter a valid IPv4 address. Likewise, if the input has focus, and that focus is then removed, the same error functionality will exist, until a valid IPv4 address is entered.

### `Find IPv4`

On initial load, this button is disabled because there is no value entered in the IPv4 input field. The button will remain disabled until the entered value matches the IPv4 format mentioned above. If a correct IPv4 address is entered, the button then becomes enabled, and clicking it will retrieve the pertinent data for the IPv4 address currently in the input field.

If a valid IPv4 address value is entered in the text box, and deleting characters results in the format to be invalid, the `Find IPv4` button becomes disabled again, and will be re-enabled as the proper format is provided.

### `My IPv4`

This button is always enabled, and can be used to retrieve the necessary data for the local machine's IPv4 address.

### `Clear`

This button clears the content that is returned and rendered on screen (_the previously entered IPv4 address or the local machine's IPv4 address, the corresponding UI data, as well as the Google map_), and also clears the input field. This also now disables the `Find IPv4` button, since there is no longer a value in the input field.

If no data is retrieved for an IPv4 address (_usually when the IPv4 address is a reserved one_), this button will clear the input field value, and the error content UI.

## General

If a properly formatted IPv4 address is entered, a user can press `Find IPv4` to retrieve data for that IPv4. The content that is displayed for that data is simply overwritten if a user then presses `My IPv4`, and the new local data is then rendered in place. This also works vice-versa, so the correct data is always displayed for both local IPv4 and arbitrary IPv4, respectively.

If a user enters a reserved IPv4 address - or any other not allowed IPv4 - and tries to press `Find IPv4`, there will be an error message displayed that is obtained from the GeoLite2 error response.

When IPv4 data is displayed on screen, when the input changes in any way, the current IPv4 data on screen is cleared out, in preparation for the newly entered IPv4 input.

If an entered IPv4 address returns a response with no city name, then the country of origin as well as the continent will be displayed in the data card. If a city is returned in the data response, then the city name and the country will be displayed.

There will also be the time zone and the UTC offset time for the location shown in the data card.

## Google Maps API

There is a Google Map that displays after retrieving IPv4 data, that shows the surrounding area based on the latitude and longitude parameters. There are some props available that change the location of the map displayed on screen, as well as the zoom level. When the location data for the entered IPv4 is rendered on the map, there is a `Circle` component indicating the location _center_ and the _radius_.

### `lat`

The latitude coordinates which are sent to the API from the IPv4 retrieval data

### `lng`

The longitude coordinates which are sent to the API from the IPv4 retrieval data

### `zoom`

A numeric value which determines the zoom level of the map. The ideal value to use seems to be `15`.
