# Avatar Thumbnail with labels

Avatar thumbnail display with text-based fallback

Displays:
- Image (in a circle) with fallback to name initials
- Name on the side
- Optional extra label under name

## Install

```bash
$ npm install @time-with/avatar-thumb-labels
or
$ yarn add @time-with/avatar-thumb-labels
```

## Usage

    import AvatarThumbLabels from '@time-with/avatar-thumb-labels';

    <AvatarThumbLabels
      src={profileImage}
      firstName={firstName}
      lastName={lastName}
      secondLabel='London'
    />


## License

MIT
