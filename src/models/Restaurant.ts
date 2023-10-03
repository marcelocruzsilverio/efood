class Eatery {
  image: string
  emphasis?: string
  category: string
  title: string
  rate: string
  description: string

  constructor(
    image: string,
    category: string,
    title: string,
    rate: string,
    description: string,
    emphasis?: string
  ) {
    this.image = image
    this.emphasis = emphasis
    this.category = category
    this.title = title
    this.rate = rate
    this.description = description
  }
}

export default Eatery
