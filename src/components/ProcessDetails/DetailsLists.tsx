import { ExternalLinkImage, Line, List, ListImage, ListItem, ListText, Section, Text } from "./styled"
import externalLink from "../../assets/images/external-link.png"
import { Tool } from "../../types/tool"
import { Doc } from "../../types/doc"

interface Props {
  data: Tool[] | Doc[]
  title: string
}

function isTool(item: Tool | Doc): item is Tool {
  return (item as Tool).purpose !== undefined
}

export default function DetailsLists({ data, title }: Props) {
  return (
    data.length > 0 && (
      <Section>
        <Line />
        <Text>
          <strong>{title}</strong>
        </Text>
        <List>
          {data.map((item) => (
            <ListItem key={item.id} href={item.link} target="_blank">
              {isTool(item) && item.image ? (
                <ListImage src={item.image} alt={item.name} />
              ) : (
                <ExternalLinkImage src={externalLink} alt={"Link Externo"} />
              )}
              {isTool(item) && item.purpose ? (
                <ListText>
                  <strong>{item.name}: </strong>
                  {item.purpose}
                </ListText>
              ) : (
                <ListText>{item.name}</ListText>
              )}
            </ListItem>
          ))}
        </List>
      </Section>
    )
  )
}
