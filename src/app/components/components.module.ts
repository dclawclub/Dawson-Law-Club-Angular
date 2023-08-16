import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { BlogPostCard21 } from './blog-post-card21/blog-post-card21.component'
import { TestimonialCard1 } from './testimonial-card1/testimonial-card1.component'
import { Item } from './item/item.component'
import { NavigationLinks1 } from './navigation-links1/navigation-links1.component'
import { TestimonialCard11 } from './testimonial-card11/testimonial-card11.component'
import { Work } from './work/work.component'
import { Statistic } from './statistic/statistic.component'
import { Author } from './author/author.component'
import { NavigationLinks2 } from './navigation-links2/navigation-links2.component'
import { Link } from './link/link.component'
import { FeatureCard3 } from './feature-card3/feature-card3.component'
import { BlogPostCard1 } from './blog-post-card1/blog-post-card1.component'
import { Client } from './client/client.component'
import { Tag } from './tag/tag.component'
import { NavigationLinks } from './navigation-links/navigation-links.component'
import { BlogPostCard2 } from './blog-post-card2/blog-post-card2.component'
import { Service } from './service/service.component'

@NgModule({
  declarations: [
    BlogPostCard21,
    TestimonialCard1,
    Item,
    NavigationLinks1,
    TestimonialCard11,
    Work,
    Statistic,
    Author,
    NavigationLinks2,
    Link,
    FeatureCard3,
    BlogPostCard1,
    Client,
    Tag,
    NavigationLinks,
    BlogPostCard2,
    Service,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BlogPostCard21,
    TestimonialCard1,
    Item,
    NavigationLinks1,
    TestimonialCard11,
    Work,
    Statistic,
    Author,
    NavigationLinks2,
    Link,
    FeatureCard3,
    BlogPostCard1,
    Client,
    Tag,
    NavigationLinks,
    BlogPostCard2,
    Service,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
