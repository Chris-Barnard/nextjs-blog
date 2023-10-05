import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function Markdown({ content, imageSizes }) {
  return (
      <ReactMarkdown
        components={{
          img: (props) => (
            <Image src={props.src} alt={props.alt} width={1200} height={200} />
          ),
          img: (props) => {
            if (imageSizes[props.src]) {
              const { src, alt } = props
              const { width, height } = imageSizes[props.src]
              return <Image src={src} alt={alt} width={width} height={height} />
            } else {
              // if we couldn't determine the image's dimensions, resort to a classic img element
              return <img {...props} />
            }
          }
        }}
      >
        {content}
      </ReactMarkdown>
  )
}
