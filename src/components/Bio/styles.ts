import styled from 'styled-components'

export const Wrapper = styled.div`
  line-height: 2rem;
`

export const SkillContainer = styled.ul`
  list-style: none;
`

export const Skill = styled.li`
  ::before {
    content: '-';
    padding-right: 0.5rem;
  }
`
