//////////////////////////////////////////////////////////////////////
//
//                Update Script⠀|⠀𝘽𝙪𝙨𝙩𝙡.•io
//      Returns the empty string if id or version is missing,
//.            or if version is the current version
//
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})


async function handleRequest(request) {

//  Testing Bustl.Cutz
//  https://update.bustl.workers.dev?id=E6CE9CFC-B0AE-4B8B-9810-6229C86B3EF5&v=1

// Get input via URL parameters
  let Q = new URL (request.url).searchParams
  let id = Q.get('id')
  let v = Q.get('v')

  if (id === null || v === null) {
    return new Response(null, {status: 404})
  }

//  Use Cloudflare KV to retreive current release data
  let value = await BUSTL.get(id)

  if (value === null) {
    return new Response(null, {status: 404})
  }

  value = JSON.parse(value)

  if (v === value.version) {
    return new Response(null, {status: 200})
  }

  let link = value.link
  link = `shortcuts://shortcuts/${link.match(/[a-zA-Z0-9]+$/)}`

  return new Response(link, {status: 200})
}



//.    let value = "{\"auuid\":\"E6CE9CFC-B0AE-4B8B-9810-6229C86B3EF5\",\"name\":\"INTEGRITY\",\"release\":\"Mon, 15 Nov 2021 23:34:17 -0600\",\"version\":\"3.141\",\"link\":\"https:\/\/www.icloud.com\/shortcuts\/dfd80ca3d5514333bb94b5a1e88346c1\",\"repository\":\"library\"}"