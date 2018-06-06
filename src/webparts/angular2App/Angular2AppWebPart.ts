import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./Angular2AppWebPart.module.scss";
import * as strings from "Angular2AppWebPartStrings";
import "reflect-metadata";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
require("zone.js");

export interface IAngular2AppWebPartProps {
  description: string;
}

export default class Angular2AppWebPart extends BaseClientSideWebPart<IAngular2AppWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
    <div class="">
      <div class="${ styles.container}">
        <div class="${ styles.row}">
          <div class="${ styles.column}">
            <app-root></app-root>
            <p class="${ styles.description}">Loading from ${escape(this.context.pageContext.web.title)}</p>
            <a href="https://aka.ms/spfx" class="${ styles.button}">
              <span class="${ styles.label}">Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </div>`;
    platformBrowserDynamic().bootstrapModule(AppModule);
  }

  // protected get dataVersion(): Version {
  //   return Version.parse("1.0");
  // }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
