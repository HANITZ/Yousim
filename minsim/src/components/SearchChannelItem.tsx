import Link from "next/link";
import styled from "@emotion/styled";
import { VideoListContainerInnerWrapper } from "styles/channelDetail/VideoListContainerStyle";
import { SearchInfoImgTextWrapper } from "styles/searchStyles/SearchStyle";
import Image, { StaticImageData } from "next/image";
import ChannelInfo from "./ChannelInfo";

const LiDescription = styled.li`
  color: black;
`;
const LiSubscriber = styled.li`
  color: black;
`;

const LiVideo = styled.li`
  color: black;
`;
const LiThumbnail = styled.li``;

interface ISearchItem {
    key: number;
    id: string;
    banner: string;
    name: string;
    description: string;
    subscriber: number;
    video: number;
    thumbnail: string;
    time: string;
    view: number;
}

const SearchChannelItem = ( props: ISearchItem) => {
  console.log(props)
  return (
    <>

      <VideoListContainerInnerWrapper>
        <SearchInfoImgTextWrapper>
          <Image
            src={data.thumbnail}
            alt="채널 대표 이미지"
            width={"188px"}
            height={"188px"}
            objectFit="cover"
            style={{ borderRadius: "50%" }}
          />
          <ChannelInfo
            title={data.name}
            subscriber={data.subscriber} 
            video={data.video}
            description={data.description}
          ></ChannelInfo>
        </SearchInfoImgTextWrapper>
      </VideoListContainerInnerWrapper>
      ;
    </>
  );
};

export default SearchChannelItem;





#!/usr/bin/env node

import arg from 'next/dist/compiled/arg/index.js'
import { startServer } from '../server/lib/start-server'
import { getPort, printAndExit } from '../server/lib/utils'
import * as Log from '../build/output/log'
import isError from '../lib/is-error'
import { getProjectDir } from '../lib/get-project-dir'
import { cliCommand } from '../lib/commands'

const nextStart: cliCommand = (argv) => {
  const validArgs: arg.Spec = {
    // Types
    '--help': Boolean,
    '--port': Number,
    '--hostname': String,
    '--keepAliveTimeout': Number,

    // Aliases
    '-h': '--help',
    '-p': '--port',
    '-H': '--hostname',
  }
  let args: arg.Result<arg.Spec>
  try {
    args = arg(validArgs, { argv })
  } catch (error) {
    if (isError(error) && error.code === 'ARG_UNKNOWN_OPTION') {
      return printAndExit(error.message, 1)
    }
    throw error
  }
  if (args['--help']) {
    console.log(`
      Description
        Starts the application in production mode.
        The application should be compiled with \`next build\` first.
      Usage
        $ next start <dir> -p <port>
      <dir> represents the directory of the Next.js application.
      If no directory is provided, the current directory will be used.
      Options
        --port, -p      A port number on which to start the application
        --hostname, -H  Hostname on which to start the application (default: 0.0.0.0)
        --keepAliveTimeout  Max milliseconds to wait before closing inactive connections
        --help, -h      Displays this message
    `)
    process.exit(0)
  }

  const dir = getProjectDir(args._[0])
  const host = args['--hostname'] || '0.0.0.0'
  const port = getPort(args)

  const keepAliveTimeoutArg: number | undefined = args['--keepAliveTimeout']
  if (
    typeof keepAliveTimeoutArg !== 'undefined' &&
    (Number.isNaN(keepAliveTimeoutArg) ||
      !Number.isFinite(keepAliveTimeoutArg) ||
      keepAliveTimeoutArg < 0)
  ) {
    printAndExit(
      `Invalid --keepAliveTimeout, expected a non negative number but received "${keepAliveTimeoutArg}"`,
      1
    )
  }

  const keepAliveTimeout = keepAliveTimeoutArg
    ? Math.ceil(keepAliveTimeoutArg)
    : undefined

  startServer({
    dir,
    hostname: host,
    port,
    keepAliveTimeout,
  })
    .then(async (app) => {
      const appUrl = `http://${app.hostname}:${app.port}`
      Log.ready(`started server on ${host}:${app.port}, url: ${appUrl}`)
      await app.prepare()
    })
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}

export { nextStart }