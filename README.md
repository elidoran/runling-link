# @runlink/link
[![Dependency Status](https://gemnasium.com/elidoran/runling.png)](https://gemnasium.com/elidoran/runling)
[![npm version](https://badge.fury.io/js/runling.svg)](http://badge.fury.io/js/runling)

Create symlinks on *nix and windows.

Features:

1. works on *nix and windows
2. has readable command via words instead of a bunch of hard to remember options
3. (best part) it accepts both paths as relative paths from the current working directory. it will make the symlink's path relative. This means we can use tab-completion even when we are creating the symlink in a different directory than the current working directory.

A plugin for [runling](https://www.npmjs.com/package/runling).


## Install

Intended for the [runling](https://www.npmjs.com/package/runling) package.

```sh
# first ensure you installed runling.
npm install -g runling

# then add this plugin.
runling add plugin @runling/link
```


## Usage

```sh
# basic readable version. 'link' = 'ln' and 'mklink'.
runling link from existingThing to newSymlink

# can drop the extra words:
runling link existingThing newSymlink

# *both* paths are relative to current working directly.
# it will make the symlink's path relative to its target.
runling link pathRelativeToHere1 pathRelativeToHere2
```


## Difference from Usual Command

Note, this is different than the traditional `ln` command which wants the symlink path first and the path to what it links to second.

That would do `ln newSymlink existingThing`, we do `ln existingThing newSymlink`.

Why? Because I look at it as the command I'm running is going from something I already have and making something new, the symlink, elsewhere. So, I specify the thing I have and then where I want to create the symlink which should point back to it. So, my way is focusing on the command and what it's doing.

The other way to look at it is from the point of view of the symlink itself. It links from where it is to the thing which already existed. So, in its perspective, it is first and "goes" to the other. That's true and makes sense. For me tho, it's backwards when I'm making the symlink.


## [MIT License](LICENSE)
