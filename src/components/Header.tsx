"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes, display } from "@/app/resources";
import { person, home, about, blog, work, gallery } from "@/app/resources/content";
import { SegmentedControl } from '@/once-ui/components/SegmentedControl';
import Cookies from 'js-cookie';

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  const SetTheme = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('light');
  
    useEffect(() => {
      // Get theme from cookies or default to 'light'
      const storedTheme = Cookies.get('data-theme') as 'dark' | 'light' | undefined;
      if (storedTheme) {
        setTheme(storedTheme);
        document.documentElement.setAttribute('data-theme', storedTheme);
      }
    }, []);
  
    const handleThemeToggle = (selectedTheme: 'dark' | 'light') => {
      setTheme(selectedTheme);
      document.documentElement.setAttribute('data-theme', selectedTheme);
      Cookies.set('data-theme', selectedTheme, { expires: 365 }); // Store preference for 1 year
    };
  
    return (
      <SegmentedControl
        buttons={[
          {
            label: 'Dark',
            value: 'dark',
            prefixIcon: 'moon',
          },
          {
            label: 'Light',
            value: 'light',
            prefixIcon: 'sun',
          },
        ]}
        onToggle={handleThemeToggle}
        selected={theme}
      />
    );
  };
  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line vert maxHeight="24" />
              {routes["/about"] && (
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon="person"
                  href="/about"
                  label={about.label}
                  selected={pathname === "/about"}
                />
              )}
              {routes["/work"] && (
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon="grid"
                  href="/work"
                  label={work.label}
                  selected={pathname.startsWith("/work")}
                />
              )}
              {routes["/blog"] && (
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon="book"
                  href="/blog"
                  label={blog.label}
                  selected={pathname.startsWith("/blog")}
                />
              )}
              {routes["/gallery"] && (
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon="gallery"
                  href="/gallery"
                  label={gallery.label}
                  selected={pathname.startsWith("/gallery")}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex paddingRight="12" horizontal="end" vertical="center" textVariant="body-default-s" gap="20">
            <Flex hide="s">{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
            <SetTheme />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};