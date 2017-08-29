# @runlink/link
[![Dependency Status](https://gemnasium.com/elidoran/runling.png)](https://gemnasium.com/elidoran/runling)
[![npm version](https://badge.fury.io/js/runling.svg)](http://badge.fury.io/js/runling)

Create symlinks on *nix and windows.

Features:

1. works on *nix and windows
2. has readable command via words instead of a bunch of hard to remember options
3. (best part) it accepts both paths as relative paths from the current working directory. it will make the symlink's path relative. This means we can use tab-completion even when we are creating the symlink in a different directory than the current working directory.
4. creates soft links by default

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
runling link from newSymlinkPath to existingPath

# can drop the extra words:
runling link newSymlinkPath existingPath

# *both* paths are relative to current working directly.
# it will make the symlink's path relative to its target.
runling link pathRelativeToCWD1 pathRelativeToCWD2
```


## Difference from Usual Command

Note, this is different than the traditional `ln` command which wants the symlink path second and the path it links to first.

Traditional would do `ln -s existingPath newSymlinkPath`, we do `runlink ln newSymlinkPath existingPath`.

Why? Because I look at it from the point of view of the symlink itself. It links from where it is to the other path. So, in its perspective, it is first and "goes" to the other.

When running the command `ls -al` which shows descriptions of symlinks it would show `newSymlinkPath -> existingPath`. So, that's the order I prefer to specify the arguments.


## [MIT License](LICENSE)
