import { Component, Input } from '@angular/core'

@Component({
  selector: 'blog-post-card2',
  templateUrl: 'blog-post-card2.component.html',
  styleUrls: ['blog-post-card2.component.css'],
})
export class BlogPostCard2 {
  @Input()
  when: string = '3 days ago'
  @Input()
  image_alt: string = 'image'
  @Input()
  author: string = 'Jane Doe'
  @Input()
  label: string = 'Event Title'
  @Input()
  title: string = 'Event Topic'
  @Input()
  rootClassName: string = ''
  @Input()
  profile_src: string =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200'
  @Input()
  description: string = 'Event description'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJlZCUyMGN1cnRhaW5zfGVufDB8fHx8MTY5MTY1MzkyNHww&ixlib=rb-4.0.3&w=1500'
  @Input()
  profile_alt: string = 'profile'
  constructor() {}
}
