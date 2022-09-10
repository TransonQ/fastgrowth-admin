import styled from 'styled-components'

// 此组件需要包裹纯文本才能生效
export const TextClamp = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) =>
    props.clamp ? props.clamp : 'none'}; //最大行数
`
