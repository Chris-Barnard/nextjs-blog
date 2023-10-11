import ReactMarkdown from "react-markdown";
import Image from "next/image";
import utilStyles from '../styles/utils.module.css';

export default function Markdown({ content, imageSizes }) {
  return (
      <ReactMarkdown
        components={{
          img: (props) => {
            if (imageSizes[props.src]) {
              const { src, alt } = props
              const { width, height } = imageSizes[props.src]
              return <Image className={utilStyles.centered} src={src} alt={alt} width={width} height={height} style={{ width: 'auto', height: 'auto' }}/>
            } else {
              // if we couldn't determine the image's dimensions, resort to a classic img element
              return <img {...props} />
            }
          },
          a: (props) => {
            // search for external links in our blog post and have them open in a new tab
            const url = props.href;
            const external = url.startsWith("https://") || url.startsWith("http://")
            if (external) {
                return <a {...props} target="_blank" />
            } else {
                return <a {...props} />
            }
          }
        }}
      >
        {content}
      </ReactMarkdown>
  )
}
