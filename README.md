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

Use sorting libs from earlier!

```
node tcp/01.js
# in another process:
echo $'zebra\naardavark\nzebra\ntiger' | nc localhost 1337
```

## HTTP

Sort over HTTP

```
node http/00.js
# in another process:
echo $'zebra\naardavark\nzebra\ntiger' | curl -X POST --data-binary @- localhost:1337
```

Okay, I'm sick of sorting animal names. How about a proxy server?

```
node http/01.js
# in another process:
curl -X GET localhost:1337?url=http://example.com
# or even better visit `localhost:1337?url=http://example.com` in a browser!
```

Let's send a heavy file from the filesystem over HTTP:

```
node http/02.js
# in another process
curl localhost:1337 > /tmp/file.mov
```

Let's fetch and return a heavy file from the web over HTTP:

```
node http/03.js
# in another process
curl localhost:1337 > /tmp/file.mov
```

## Errors

Is something wrong? Let's fix that! Send a Pull Request - typos, bad code, etc. it's all good :)