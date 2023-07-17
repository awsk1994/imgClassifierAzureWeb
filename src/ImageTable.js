import React from 'react';

function imgPathProcess(imgPath) {
  return imgPath.replace('\\', '/');
  // return imgPath;
}

function ImageTable({ data }) {
  return (
    <table style={{border: '1px solid black' }}>
      <thead>
        <tr>
          <th style={{border: '1px solid black' }}>Image</th>
          <th style={{border: '1px solid black' }}>Details</th>
        </tr>
      </thead>
      <tbody>
        {/* <p>{JSON.stringify(data)}</p> */}
        {data.map((item) => (
          <tr >
            <td style={{border: '1px solid black' }}>
              <img style={{width: '300px'}} src={imgPathProcess(item.imgPath)} />
            </td>
            {/* <td>{imgPathProcess(item.imgPath)}</td> */}
            <td style={{border: '1px solid black' }}>
              <div>
                <h3>Tags:</h3>
                <ul>
                  {
                    item.tags.map((tag, index) => (
                      <li>{tag.name} (confidence: {tag.conf.toFixed(1)})</li>
                    ))
                  }
                </ul>
              </div>

              <div>
                <h3>Captions:</h3>
                <ul>
                  {
                    item.captions.map((caption, index) => (
                      <li>{caption.name} (confidence: {caption.conf.toFixed(1)})</li>
                    ))
                  }
                </ul>
              </div>


              <div>
                <h3>Texts:</h3>
                <ul>
                  {
                    item.texts.map((text, index) => (
                      <li>{text}</li>
                    ))
                  }
                </ul>
              </div>
            </td>
            {/* <td>
              <ul>
                {
                  item.tags.map((tag, index) => (
                    <li>{tag}</li>
                  ))
                }
              </ul>
            </td> */}
            {/* <td>{item.status}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ImageTable