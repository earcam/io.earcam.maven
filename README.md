# io.earcam.maven [![Build Status](https://travis-ci.org/earcam/io.earcam.maven.svg?branch=master)](https://travis-ci.org/earcam/io.earcam.maven) [![Maven Central](https://maven-badges.herokuapp.com/maven-central/io.earcam/io.earcam.maven/badge.svg)](https://maven-badges.herokuapp.com/maven-central/io.earcam/io.earcam.maven)



## List of profiles

Profiles are inherited, using the enforcer plugin with properties where interdependent.

| Profile Name  | Description |
| ------------- |-------------|
|signature      | only in settings.xml |
|strict         | enforce formatting, licence, etc |
|tidy           | auto format, add licence header (as a fix for 'strict') |
|jdk-oracle     | toolchains |
|jdk-azul       | toolchains |
|jdk-openjdk    | toolchains |
|jdk-openj9     | toolchains |
|report         | reporting plugins (no aggregates) |
|site           | full monty; enforces that profiles "analyse" and "report" are run etc |
|site-check     | just render the site's custom content, as quickly as possible (no reports) |
|sonar          | sonarqube integration |
|analyse        | coverage and pitest |
|distribute     | adds signature, attaches extra artifacts (source, docs) |
|release-scm    | tags release in SCM |
|publish        | release to sonatype-oss/maven-central |
