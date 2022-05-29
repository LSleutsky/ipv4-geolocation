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

Now install all dependencies with:

```bash
yarn install
```

After successfully installing dependencies, to quickly run the app, run the following commands:

```bash
yarn dev
```

Alternatively, within a _Docker_ environment, the app can also be ran with:

```bash
docker-compose up
```

If using V2 of _Docker Compose_, then the following command can be ran:

```bash
docker compose up
```

To stop the currently running _Docker_ instance, run the following command:

```bash
docker-compose stop
```

And likewise if using V2 of _Docker Compose_, then run:

```bash
docker compose stop
```

## `Enter IPv4 Address`

This input allows a user to enter an IPv4 address. The input field is blocked from entering characters that are not of an IPv4 format (_i.e 111.222.3.4_).

If there is focus on the input field, and no value is entered, or an incorrect format is entered, then there will be an error on removing focus from the input field. The input field will have a red outline and there will be an error message displayed asking the user to enter a valid IPv4 address

## `Find IPv4`

On initial load, this button is disabled because there is no value entered in the IPv4 input field. The button will remain disabled until entered value matches the IPv4 format mentioned above. If a correct IPv4 address is entered, the button becomes enabled, and clicking it will retrieve the pertinent data for the IPv4 address currently in the input field.

If a valid IPv4 address value is entered in the text box, if deleting characters results in the format to be invalid, the `Find IPv4` button becomes disabled again, and will be re-enabled as the proper format is provided.

## `My IPv4`

This button is always enabled, and can be used to retrieve the pertinent data for the local machine's IPv4 address.

## `Clear`

This button clears the content that is returned and rendered on screen based on the retrieval of an arbitrary IPv4 address, or the local machine's IPv4 address, and also clears the input field. This also now disables the `Find IPv4` button, since there is no longer a value in the input field.

## General

If a properly formatted IPv4 address is entered, a user can press `Find IPv4` to retrieve data for that IPv4. The content that is displayed for that data is simply overwritten if a user then presses `My IPv4`, and the new local data is then rendered in place. This also works vice-versa, so the correct data is always displayed for both local IPv4 and arbitrary IPv4, respectively.

If a user enters a reserved IPv4 address - or any other not allowed IPv4 - and tries to press `Find IPv4`, there will be an error message displayed that is obtained from the GeoLite2 error response.

When IPv4 data is displayed on screen, when the input changes in any way, the current IPv4 data on screen is cleared out, in preparation for the newly entered IPv4 input.

## Google Maps API

There is a Google Map that displays after retrieving IPv4 data, that shows the surrounding area based on the latitude and longitude parameters. There are some props available that change the location of the map displayed on screen, as well as the zoom level. When the location data for the entered IPv4 is rendered on the map, there is a `Circle` component indicating the location _center_ and the _radius_.

### `lat`

The latitude coordinates which are sent to the API from the IPv4 retrieval data

### `lng`

The longitude coordinates which are sent to the API from the IPv4 retrieval data

### `zoom`

A numeric value which determines the zoom level of the map. The ideal value to use seems to be `15`.
