"use client";

import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
  SegmentedControl,
  Dialog,
  RevealFx,
  LetterFx,
  Card,
  Row,
  Line,
  Badge,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";
import React, { useState } from "react";


 async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;
  const webimage = "/images/og_image.png";
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
      images: [
        {
          url: webimage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [webimage],
    },
  };
}
export default function About() {
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0].company || "",
            },
          }),
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
<Flex fillWidth mobileDirection="column" horizontal="center">
{about.avatar.display && (
  <Column
    className={styles.avatar}
    minWidth="160"
    paddingX="l"
    paddingBottom="xl"
    gap="m"
    flex={3}
    horizontal="center"
  >
    <Avatar src={person.avatar} size="xl" />
    <Flex gap="8" vertical="center">
      <Icon onBackground="accent-weak" name="globe" />
      {person.location}
    </Flex>
    {person.languages.length > 0 && (
      <Flex wrap gap="8">
        {person.languages.map((language, index) => (
          <Tag key={index} size="l">
            {language}
          </Tag>
        ))}
      </Flex>
    )}
    <Badge
      arrow
      effect
      onClick={() => setIsFirstDialogOpen(true)}
    >
      View My Resume
    </Badge>
    <Dialog
      onClose={() => setIsFirstDialogOpen(false)}
      title={
        <div style={{ marginBottom: '16px' }}>
          <Heading>
            Resume
          </Heading>
        </div>
      }
      description="Explore my academic background, skills, and experience in accounting and payroll, along with certifications in QuickBooks, Xero, and data analysis tools."
      isOpen={isFirstDialogOpen}
    >
      <Column
        paddingY="12"
        fillWidth
      >
        <RevealFx
          speed="medium"
          translateY={0}
        >
      <SmartImage
        src={person.resume}
        alt="Resume"
        aspectRatio="0.94" // 8.5 / 11 = 1.29412 (approx.)
        radius="l"
        objectFit="contain"
        onError={(error) => console.error('Error loading image:', error)}
      />
        </RevealFx>
        <a
          href={person.resume}
          download="resume.jpg"
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant="secondary"
            size="m"
            label="Download"
            style={{ marginTop: '16px' }}
          />
        </a>
      </Column>
    </Dialog>
  </Column>
)}

        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap>
                {social.map(
                  (item) =>
                    item.link && (
                      <Button
                        key={item.name}
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name}
                        size="s"
                        variant="secondary"
                      />
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

<SegmentedControl
  marginBottom="m"
  onToggle={(value) => setSelectedValue(value)}
  buttons={[
    {
      size: "l",
      value: "education",
      prefixIcon: 'academicCap',
      label: "Education",
    },
    {
      size: "l",
      value: "work",
      prefixIcon: 'suitcase',
      label: "Work",
    },
  ]}
/>

{((selectedValue === "work" && about.work.experiences.length > 0) ||
  (selectedValue === "education" && about.studies.institutions.length > 0)) && (
  <Flex
    background="surface"
    border="surface"
    padding="m"
    fillWidth
    marginBottom="l" // added margin below the box
  >
    {selectedValue === "work" && (
      <div>
        <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
          {about.work.title}
        </Heading>
        <Column fillWidth gap="l" marginBottom="xs">
          {about.work.experiences.map((experience, index) => (
            <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
              <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                <Text id={experience.company} variant="heading-strong-l">
                  {experience.company}
                </Text>
                <Text variant="heading-default-xs" onBackground="neutral-weak">
                  {experience.timeframe}
                </Text>
              </Flex>
              <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                {experience.role}
              </Text>
              <Column as="ul" gap="16">
                {experience.achievements.map((achievement: JSX.Element, index: number) => (
                  <Text
                    as="li"
                    variant="body-default-m"
                    key={`${experience.company}-${index}`}
                  >
                    {achievement}
                  </Text>
                ))}
              </Column>
              {experience.images.length > 0 && (
                <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                  {experience.images.map((image, index) => (
                    <Flex
                      key={index}
                      border="neutral-medium"
                      radius="m"
                      minWidth={image.width}
                      height={image.height}
                    >
                      <SmartImage
                        enlarge
                        radius="m"
                        sizes={image.width.toString()}
                        alt={image.alt}
                        src={image.src}
                      />
                    </Flex>
                  ))}
                </Flex>
              )}
            </Column>
          ))}
        </Column>
      </div>
    )}
{selectedValue === "education" && (
  <div>
    <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
      {about.studies.title}
    </Heading>
    <Row fillWidth gap="l" marginBottom="xs">
      {about.studies.institutions.map((institution, index) => (
        <Card
        maxWidth={24}
        radius="l-4"
        direction="column"
        key={`${institution.name}-${index}`}
        padding="xs"
        gap= "xs"
        >
          <SmartImage
            sizes="160px"
            fillWidth
            aspectRatio="1 / 1"
            radius="l"
            src={institution.logo}
          />
          <Column
            fillWidth
            paddingX="20"
            paddingY="24"
            gap="8"
          >
            <Text variant="body-default-xl">
              {institution.name}
            </Text>
            <Text
              onBackground="neutral-weak"
              variant="body-default-s"
            >
              {institution.description}
            </Text>
          </Column>
          <Line background="neutral-alpha-medium" />
          <Row
            paddingX="20"
            paddingY="12"
            gap="8"
            vertical="center"
            textVariant="label-default-s"
            onBackground="neutral-medium"
          >
            <Text variant="label-default-s">
              {institution.timeframe}
            </Text>
          </Row>
        </Card>
      ))}
    </Row>
  </div>
)}
  </Flex>
)}
        
          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="xs"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
