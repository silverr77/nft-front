import React from "react";
import {
  PhotographIcon,
  ColorSwatchIcon,
  TrashIcon,
  SaveAsIcon,
} from "@heroicons/react/solid";
import ReactTooltip from 'react-tooltip';

const EditorActions = ({addImage, changeColor, removeSelectedItem, savePicture}) => {
  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      <button
        data-tip="Upload picture to the workspace"
        onClick={addImage}
        type="button"
        className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <PhotographIcon className="h-6" />
      </button>

      <button
        data-tip="Change the background color of your workspace"
        onClick={changeColor}
        type="button"
        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <ColorSwatchIcon className="h-6" />
      </button>

      <button
        data-tip="Remove the selected item"
        onClick={removeSelectedItem}
        type="button"
        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <TrashIcon className="h-6" />
      </button>

      <button
        data-tip="Export your banner"
        onClick={savePicture}
        type="button"
        className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <SaveAsIcon className="h-6" />
      </button>
      <ReactTooltip place="top" type="light" effect="solid"/>
    </span>
  );
};

export default EditorActions;
