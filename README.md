# IPv4 Geolocation

This is a small web application which allows a user to enter an IPv4 address into an input, and retrieve location information based on [Maxmind's GeoLite2](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data) service.

An option to also retrieve data based on the local machine's IPv4 address also exists in the core functionality.

To quickly run the app, run the following commands:

```bash
yarn dev
```

Alternatively, the app can also be ran with:

```bash
docker-compose up
```

## Enter IPv4 Address

This input allows a user to enter an IPv4 address. The input field is blocked from entering characters that are not of an IPv4 format (_i.e 111.222.3.4_).

If there is focus on the input field, and no value is entered, or an incorrect format is entered, then there will be an error on removing focus from the input field. The input field will have a red outline and there will be an error message displayed asking the user to enter a valid IPv4 address

## Find IPv4

On initial load, this button is disabled because there is no value entered in the IPv4 input field. The button will remain disabled until entered value matches the IPv4 format mentioned above. If a correct IPv4 address is entered, the button becomes enabled, and clicking it will retrieve the pertinent data for the IPv4 address currently in the input field.

If a valid IPv4 address value is entered in the text box, if deleting characters results in the format to be invalid, the `Find IPv4` button becomes disabled again, and will be re-enabled as the proper format is provided.

## My IPv4

This button is always enabled, and can be used to retrieve the pertinent data for the local machine's IPv4 address.

## Clear

This button clears the content that is returned and rendered on screen based on the retrieval of an arbitrary IPv4 address, or the local machine's IPv4 address, and also clears the input field. This also now disables the `Find IPv4` button, since there is no longer a value in the input field.

### General

If a properly formatted IPv4 address is entered, a user can press `Find IPv4` to retrieve data for that IPv4. The content that is displayed for that data is simply overwritten if a user then presses `My IPv4`, and the new local data is then rendered in place. This also works vice-versa, so the correct data is always displayed for both local IPv4 and arbitrary IPv4, respectively.
