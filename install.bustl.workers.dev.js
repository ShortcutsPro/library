//////////////////////////////////////////////////////////////////////
//
//                Install Script⠀|⠀𝘽𝙪𝙨𝙩𝙡.•io
//              Returns Bustl.Cutz app if id is missing,
//
const error = "https://cutz.bustl.io"

async function handleRequest(request) {

//  Testing Bustl.Cutz
//  https://install.bustl.workers.dev?id=E6CE9CFC-B0AE-4B8B-9810-6229C86B3EF5

// Get input via URL parameters
  let Q = new URL (request.url).searchParams
  let id = Q.get('id')

  if (id === null {
    return Response.redirect(error, 301)
  }

//  Use Cloudflare KV to retreive current release data
  let value = await BUSTL.get(id)

  if (value === null) {
    return Response.redirect(error, 302)
  }

  value = JSON.parse(value)

  let link = value.link
  link = `shortcuts://shortcuts/${link.match(/[a-zA-Z0-9]+$/)}`

  return Response.redirect(link, 302)
}


addEventListener("fetch", async event => {
  event.respondWith(handleRequest(event.request))
})
