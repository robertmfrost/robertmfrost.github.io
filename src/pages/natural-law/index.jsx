import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../common/Container';
import Breadcrumbs from '../../common/Breadcrumbs';
import Image from '../../common/Image';
import Quote from '../../common/Quote';

const NaturalLaw = () => (
  <Container>
    <Breadcrumbs
      links={[
        {
          href: "table-of-contents",
          label: "Table of Contents"
        },
        {
          label: "Natural Law"
        },
      ]}
    />
    <h1>Natural Law</h1>
    <Container panel>
      <Image
        src="https://thewallpaper.co//wp-content/uploads/2017/10/nebula-hd-images-art-mobile-space-fresh-stars-high-resolution-planet.jpg"
        cropped
        height="10rem"
        width="100%"
      />
      <p>
        Natural law is a description of the mechanics which govern existence. Everything exists by way of natural law, and nothing can exist except done by way of natural law. A true understanding of natural law helps us to better understand our past, our present, and our future.
      </p>

      <p>
        Natural law, within and of itself, is neither good nor evil. It simply is. Good and evil are a result of agency (free will and choice), a topic that will be covered in more detail in the <Link to="natural-law-of-intelligence">next lesson</Link>. Agency (and its consequences) rely on natural law.
      </p>

      <Quote
        src="JSP, Journals Vol. 2:403–405, Appendix 2, 1–4 April 1843"
        link="http://scriptures.info/scriptures/tc/glossary/blessings"
      >
        And if a person gains more knowledge and intelligence in this life through his diligence and obedience than another, he will have so much the advantage in the world to come. There is a law, irrevocably decreed in Heaven before the foundations of this world, upon which all blessings are predicated — and when we obtain any blessing from God, it is by obedience to that law upon which it is predicated.
      </Quote>

      <p>To emphasize:</p>
      <ul>
        <li><em>"...it is by obedience to <strike>God</strike> <strong>that law</strong> upon which it is predicated."</em> - Notice what the obedience is to.</li>
        <li><em>"...irrevocably decreed..."</em> - God makes several <a href="http://scriptures.info/Scriptures/Search?q=decree">decrees</a> throughout scripture, some of which states He <a href="http://scriptures.info/scriptures/tc/section/48.4#4">will not revoke</a> the decree (perhaps implying that He can, but won't), but this quote from Joseph Smith Jr. is the <a href="http://scriptures.info/Scriptures/Search?q=irrevocably+decreed">only reference</a> of any decree which is irrevocable (or done irrevocably). Other uses of the term <a href="http://scriptures.info/Scriptures/Search?q=irrevocable">irrevocable</a> seem to be in connection to natural law and/or God's declaration (decree, perhaps explanation) of natural law.</li>
        <li><em>"... There <strike>was</strike> <strong>is</strong> a law ... upon which all blessings are predicated..."</em> - The law is currently active. It is present tense. It is that same law which was decreed "in Heaven <u>before</u> the fondations of this world". The word <em>before</em> could be understood as "during a period of time preceding (a particular event, date, or time) or "in front of".</li>
      </ul>
    </Container>
  </Container>
);

export default NaturalLaw;