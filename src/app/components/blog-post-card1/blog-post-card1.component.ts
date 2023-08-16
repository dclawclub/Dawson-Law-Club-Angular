import { Component, Input } from '@angular/core'

@Component({
  selector: 'blog-post-card1',
  templateUrl: 'blog-post-card1.component.html',
  styleUrls: ['blog-post-card1.component.css'],
})
export class BlogPostCard1 {
  @Input()
  description: string = 'Description'
  @Input()
  title: string = 'About: ...'
  @Input()
  rootClassName: string = ''
  @Input()
  label: string = 'Event'
  @Input()
  image_alt: string = 'image'
  @Input()
  author: string = 'Jon Doe'
  @Input()
  profile_src: string =
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200'
  @Input()
  profile_alt: string = 'profile'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJlZCUyMGN1cnRhaW5zfGVufDB8fHx8MTY5MTY1MzkyNHww&ixlib=rb-4.0.3&w=1500'
  @Input()
  time: string = '5 min read'
  constructor() {}
}
