/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname:  "images-na.ssl-images-amazon.com",
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
          },
          {
            protocol: "https",
            hostname: "www.amazon.com",
          },
          {
            protocol: "https",
            hostname: "m.media-amazon.com",
          },
          {
            protocol: "https",
            hostname: "cdn.builder.io",
          },
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com"
          },
          {
            protocol: "https",
            hostname: "www.themealdb.com"
          },
                   
        ],
      },


};

export default nextConfig;
