import { createLogger, format, transports } from "winston";

export const logger = createLogger({
  transports: [
    new transports.File({
      filename: ".logs/error.log",
      level: "error",
      format: format.combine(
        format.errors({ stack: true }),
        format.timestamp(),
        format.json()
      ),
    }),

    new transports.File({
      filename: ".logs/info.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),

    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.colorize({ all: true }),
        format.label({ label: "AG" }),
        format.printf(
          (log) =>
            `[${log.label}] | ${log.timestamp} [${log.level}]: ${log.message}`
        )
      ),
    }),
  ],
});
