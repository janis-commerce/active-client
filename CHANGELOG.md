# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.2.2] - 2019-08-13
### Fixed
- Client fetch now works with mysql filtering by `name` or `storename`

## [1.2.1] - 2019-08-06
### Changed
- Client injection refactored

## [1.2.0] - 2019-07-18
### Added
- `getInstance` with client propagation

## [1.1.1] - 2019-07-15
### Changed
- `model` package instead of `model-controller`

### Fixed
- `ModelClient` fixed table getter

## [1.1.0] - 2019-07-04
### Added
- Settings package for handle settings

### Changed
- `ModelClient` get method - limited to 1 client

## [1.0.0] - 2019-06-26
### Added
- `ModelClient` for getting client
- `ModelClient` and `ActiveClient` - `getByField` method
- tests