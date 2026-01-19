// import supabase from '../config/supabase.js';

// class FileService {
//   async getProjectFiles(projectId) {
//     try {
//       const { data, error } = await supabase
//         .from('files')
//         .select('*')
//         .eq('project_id', projectId)
//         .order('path', { ascending: true });

//       if (error) throw error;

//       // Build tree structure properly
//       return this.buildFileTree(data || []);
//     } catch (error) {
//       console.error('Get project files error:', error);
//       throw error;
//     }
//   }

//   async createFile(projectId, fileData) {
//     try {
//       const { data, error } = await supabase
//         .from('files')
//         .insert({
//           project_id: projectId,
//           path: fileData.path,
//           name: fileData.name,
//           content: fileData.content || '',
//           language: fileData.language || 'plaintext',
//           is_directory: fileData.is_directory || false,
//           parent_id: fileData.parent_id || null
//         })
//         .select()
//         .single();

//       if (error) throw error;
//       return data;
//     } catch (error) {
//       console.error('Create file error:', error);
//       throw error;
//     }
//   }

//   async updateFile(fileId, content) {
//     try {
//       const { data, error } = await supabase
//         .from('files')
//         .update({ content, updated_at: new Date().toISOString() })
//         .eq('id', fileId)
//         .select()
//         .single();

//       if (error) throw error;
//       return data;
//     } catch (error) {
//       console.error('Update file error:', error);
//       throw error;
//     }
//   }

//   async deleteFile(fileId) {
//     try {
//       const { error } = await supabase
//         .from('files')
//         .delete()
//         .eq('id', fileId);

//       if (error) throw error;
//       return { success: true };
//     } catch (error) {
//       console.error('Delete file error:', error);
//       throw error;
//     }
//   }

//   async renameFile(fileId, newName, newPath) {
//     try {
//       const { data, error } = await supabase
//         .from('files')
//         .update({ name: newName, path: newPath })
//         .eq('id', fileId)
//         .select()
//         .single();

//       if (error) throw error;
//       return data;
//     } catch (error) {
//       console.error('Rename file error:', error);
//       throw error;
//     }
//   }

//   buildFileTree(files) {
//     const fileMap = {};
//     const rootFiles = [];

//     // First pass: create map of all files
//     files.forEach(file => {
//       fileMap[file.id] = { ...file, children: [] };
//     });

//     // Second pass: build tree structure
//     files.forEach(file => {
//       if (file.parent_id && fileMap[file.parent_id]) {
//         // Add to parent's children
//         fileMap[file.parent_id].children.push(fileMap[file.id]);
//       } else {
//         // Root level file/folder
//         rootFiles.push(fileMap[file.id]);
//       }
//     });

//     return rootFiles;
//   }

//   async getFileContent(fileId) {
//     try {
//       const { data, error } = await supabase
//         .from('files')
//         .select('content, language, name, path')
//         .eq('id', fileId)
//         .single();

//       if (error) throw error;
//       return data;
//     } catch (error) {
//       console.error('Get file content error:', error);
//       throw error;
//     }
//   }
// }

// export default new FileService();
import supabase from '../config/supabase.js';

class FileService {
  /**
   * ✅ FIXED: Get project files with better error handling
   */
  async getProjectFiles(projectId) {
    try {
      const { data, error } = await supabase
        .from('files')
        .select('*')
        .eq('project_id', projectId)
        .order('path', { ascending: true });

      if (error) {
        console.error('Supabase get files error:', error);
        throw error;
      }

      // Build tree structure properly
      return this.buildFileTree(data || []);
    } catch (error) {
      console.error('Get project files error:', error);
      throw error;
    }
  }

  /**
   * ✅ FIXED: Create file with proper validation
   */
  async createFile(projectId, fileData) {
    try {
      // ✅ Validate required fields
      if (!projectId) {
        throw new Error('project_id is required');
      }

      if (!fileData.name) {
        throw new Error('File name is required');
      }

      if (!fileData.path) {
        throw new Error('File path is required');
      }

      // ✅ Build file object with all required fields
      const fileObject = {
        project_id: projectId,
        name: fileData.name,
        path: fileData.path,
        content: fileData.content || '',
        language: fileData.language || 'plaintext',
        is_directory: fileData.is_directory || false,
        parent_id: fileData.parent_id || null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      console.log('📝 Creating file in Supabase:', {
        name: fileObject.name,
        path: fileObject.path,
        project_id: fileObject.project_id,
        is_directory: fileObject.is_directory,
        parent_id: fileObject.parent_id
      });

      // ✅ Insert into Supabase
      const { data, error } = await supabase
        .from('files')
        .insert(fileObject)
        .select()
        .single();

      if (error) {
        console.error('Supabase insert error:', error);
        
        // ✅ Handle specific error codes
        if (error.code === '23505') {
          throw new Error(`File already exists at path: ${fileObject.path}`);
        }
        
        if (error.code === '23503') {
          throw new Error(`Invalid parent_id or project_id`);
        }
        
        throw error;
      }

      if (!data) {
        throw new Error('No data returned from Supabase after insert');
      }

      console.log('✅ File created successfully:', data.id);
      return data;
    } catch (error) {
      console.error('Create file error:', error);
      throw error;
    }
  }

  /**
   * Update file content
   */
  async updateFile(fileId, content) {
    try {
      if (!fileId) {
        throw new Error('fileId is required');
      }

      const { data, error } = await supabase
        .from('files')
        .update({ 
          content, 
          updated_at: new Date().toISOString() 
        })
        .eq('id', fileId)
        .select()
        .single();

      if (error) {
        console.error('Supabase update error:', error);
        throw error;
      }

      if (!data) {
        throw new Error('File not found');
      }

      return data;
    } catch (error) {
      console.error('Update file error:', error);
      throw error;
    }
  }

  /**
   * Delete file
   */
  async deleteFile(fileId) {
    try {
      if (!fileId) {
        throw new Error('fileId is required');
      }

      const { error } = await supabase
        .from('files')
        .delete()
        .eq('id', fileId);

      if (error) {
        console.error('Supabase delete error:', error);
        throw error;
      }

      return { success: true };
    } catch (error) {
      console.error('Delete file error:', error);
      throw error;
    }
  }

  /**
   * Rename file
   */
  async renameFile(fileId, newName, newPath) {
    try {
      if (!fileId) {
        throw new Error('fileId is required');
      }

      if (!newName) {
        throw new Error('newName is required');
      }

      if (!newPath) {
        throw new Error('newPath is required');
      }

      const { data, error } = await supabase
        .from('files')
        .update({ 
          name: newName, 
          path: newPath,
          updated_at: new Date().toISOString()
        })
        .eq('id', fileId)
        .select()
        .single();

      if (error) {
        console.error('Supabase rename error:', error);
        throw error;
      }

      if (!data) {
        throw new Error('File not found');
      }

      return data;
    } catch (error) {
      console.error('Rename file error:', error);
      throw error;
    }
  }

  /**
   * Get single file content
   */
  async getFileContent(fileId) {
    try {
      if (!fileId) {
        throw new Error('fileId is required');
      }

      const { data, error } = await supabase
        .from('files')
        .select('content, language, name, path')
        .eq('id', fileId)
        .single();

      if (error) {
        console.error('Supabase get file content error:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Get file content error:', error);
      throw error;
    }
  }

  /**
   * Build file tree from flat list
   */
  buildFileTree(files) {
    if (!files || files.length === 0) {
      return [];
    }

    const fileMap = {};
    const rootFiles = [];

    // First pass: create map of all files
    files.forEach(file => {
      fileMap[file.id] = { ...file, children: [] };
    });

    // Second pass: build tree structure
    files.forEach(file => {
      if (file.parent_id && fileMap[file.parent_id]) {
        // Add to parent's children
        fileMap[file.parent_id].children.push(fileMap[file.id]);
      } else {
        // Root level file/folder
        rootFiles.push(fileMap[file.id]);
      }
    });

    return rootFiles;
  }
}

export default new FileService();