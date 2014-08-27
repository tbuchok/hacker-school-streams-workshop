hacker-school-streams-workshop
==============================

Hacker School streams workshop

## Pipes

Get the unique word count from some text:

```
echo $'zebra\naardavark\nzebra\ntiger' | sort | uniq | wc -l
```

Now do it with Node libs:

```
echo $'zebra\naardavark\nzebra\ntiger' | node lib/sort | node lib/uniq | node lib/wc
```

Even better, use one Node lib:

```
echo $'zebra\naardavark\nzebra\ntiger' | node pipes/01.js
```

## TCP

An echo server:

```
node tcp/00.js
# in another process:
nc localhost 1337
> hello
```
