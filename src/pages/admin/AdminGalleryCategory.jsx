import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import {
    addGalleryItems,
    getGalleryByCategory,
    deleteGalleryItem,
    updateGalleryOrder,
} from '../../redux/actions/admin/galleryActions';

// DnD Kit imports
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Sortable Item Component
const SortableGalleryItem = ({ item, onDelete, onImageClick }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: item?._id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    const handleImageClick = (e) => {
        e.stopPropagation();
        onImageClick(item);
    };

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        onDelete(item._id, item.title);
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 cursor-move relative"
        >
            <div className="relative group">
                {/* Image with click handler */}
                <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={handleImageClick}
                />
                
                {/* Delete Button - Always visible on mobile, on hover for desktop */}
                <button
                    onClick={handleDeleteClick}
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors shadow-lg lg:opacity-0 lg:group-hover:opacity-100"
                    title="Delete photo"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>

                {/* Drag Handle Indicator */}
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

// Image Viewer Component with Navigation
const ImageViewer = ({ items, currentIndex, isOpen, onClose, onDelete, onNavigate }) => {
    if (!isOpen || !items || items.length === 0) return null;

    const currentItem = items[currentIndex];

    const handleNext = () => {
        onNavigate((currentIndex + 1) % items.length);
    };

    const handlePrev = () => {
        onNavigate((currentIndex - 1 + items.length) % items.length);
    };

    const handleDelete = () => {
        onDelete(currentItem._id, currentItem.title);
        onClose();
    };

    const handleKeyDown = useCallback((e) => {
        switch (e.key) {
            case 'Escape':
                e.preventDefault();
                onClose();
                break;
            case 'ArrowRight':
            case ' ':
                e.preventDefault();
                handleNext();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                handlePrev();
                break;
            default:
                break;
        }
    }, [currentIndex, items.length, onClose, onNavigate]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, handleKeyDown]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
            <div className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center">
                
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition-colors z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Delete Button */}
                <button
                    onClick={handleDelete}
                    className="absolute top-4 left-4 text-white bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>

                {/* Previous Button */}
                {items.length > 1 && (
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-full hover:bg-opacity-70 transition-colors z-10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {/* Next Button */}
                {items.length > 1 && (
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-full hover:bg-opacity-70 transition-colors z-10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}

                {/* Image */}
                <div 
                    className="relative w-full h-full flex items-center justify-center cursor-pointer"
                    onClick={handleNext}
                >
                    <img
                        src={currentItem.image}
                        alt={currentItem.title}
                        className="max-w-full max-h-full object-contain select-none"
                        draggable={false}
                    />
                </div>

                {/* Image Counter */}
                {items.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                        <span className="text-sm font-medium">
                            {currentIndex + 1} / {items.length}
                        </span>
                    </div>
                )}

                {/* Title */}
                {currentItem.title && (
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg max-w-md">
                        <p className="text-sm font-medium">{currentItem.title}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// Delete Confirmation Dialog
const DeleteConfirmationDialog = ({ isOpen, itemTitle, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-red-100 p-2 rounded-full">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Delete Photo</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                    Are you sure you want to delete <span className="font-semibold">"{itemTitle}"</span>? This action cannot be undone.
                </p>

                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

const AdminGalleryCategory = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const { items, loading } = useSelector(state => state.gallery);
    const [showAddModal, setShowAddModal] = useState(false);
    const [imageFiles, setImageFiles] = useState([]);
    const [localItems, setLocalItems] = useState([]);
    const [viewerState, setViewerState] = useState({
        isOpen: false,
        currentIndex: 0
    });
    const [deleteDialog, setDeleteDialog] = useState({ 
        isOpen: false, 
        itemId: null, 
        itemTitle: '' 
    });

    // Category display names
    const categoryDisplayNames = {
        moving: 'Moving',
        storage: 'Storage',
    };

    // Initialize sensors for DnD
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    useEffect(() => {
        if (category) {
            dispatch(getGalleryByCategory(category));
        }
    }, [dispatch, category]);

    // Update local items when Redux items change
    useEffect(() => {
        if (items && items.length > 0) {
            setLocalItems([...items]);
        } else {
            setLocalItems([]);
        }
    }, [items]);

    const handleAddItems = async (e) => {
        e.preventDefault();

        if (imageFiles.length === 0) {
            toast.error('Please select at least one image');
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('category', category);

            // Append all selected files
            imageFiles.forEach(file => {
                formDataToSend.append('images', file);
            });

            await dispatch(addGalleryItems(formDataToSend));
            toast.success(`${imageFiles.length} photos added successfully`);
            setShowAddModal(false);
            setImageFiles([]);
            dispatch(getGalleryByCategory(category));
        } catch (error) {
            toast.error('Failed to add photos');
        }
    };

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);
        setImageFiles(files);
    };

    const handleDeleteClick = (itemId, itemTitle) => {
        setDeleteDialog({
            isOpen: true,
            itemId,
            itemTitle: itemTitle || 'this photo'
        });
    };

    const handleDeleteConfirm = async () => {
        if (deleteDialog.itemId) {
            try {
                await dispatch(deleteGalleryItem(deleteDialog.itemId));
                toast.success('Photo deleted successfully');
                
                // Close viewer if the deleted image was being viewed
                if (viewerState.isOpen) {
                    setViewerState({ isOpen: false, currentIndex: 0 });
                }
                
                dispatch(getGalleryByCategory(category));
            } catch (error) {
                toast.error('Failed to delete photo');
            }
        }
        setDeleteDialog({ isOpen: false, itemId: null, itemTitle: '' });
    };

    const handleDeleteCancel = () => {
        setDeleteDialog({ isOpen: false, itemId: null, itemTitle: '' });
    };

    const handleImageClick = (item) => {
        const itemIndex = localItems.findIndex(i => i._id === item._id);
        if (itemIndex !== -1) {
            setViewerState({
                isOpen: true,
                currentIndex: itemIndex
            });
        }
    };

    const handleViewerClose = () => {
        setViewerState({ isOpen: false, currentIndex: 0 });
    };

    const handleViewerNavigate = (newIndex) => {
        setViewerState(prev => ({
            ...prev,
            currentIndex: newIndex
        }));
    };

    const handleViewerDelete = (itemId, itemTitle) => {
        setViewerState({ isOpen: false, currentIndex: 0 });
        handleDeleteClick(itemId, itemTitle);
    };

    const removeSelectedFile = (index) => {
        setImageFiles(prev => prev.filter((_, i) => i !== index));
    };

    // Handle drag end event
    const handleDragEnd = async (event) => {
        const { active, over } = event;

        if (!over) return;

        if (active.id !== over.id) {
            const oldIndex = localItems.findIndex(item => item._id === active.id);
            const newIndex = localItems.findIndex(item => item._id === over.id);

            if (oldIndex !== -1 && newIndex !== -1) {
                const reorderedItems = arrayMove(localItems, oldIndex, newIndex);
                setLocalItems(reorderedItems);

                const orderData = reorderedItems.map((item, index) => ({
                    id: item._id,
                    order: index + 1
                }));

                try {
                    await dispatch(updateGalleryOrder(orderData));
                    toast.success('Order updated successfully');
                } catch (error) {
                    toast.error('Failed to update order');
                    setLocalItems([...items]);
                }
            }
        }
    };

    if (!category || !categoryDisplayNames[category]) {
        return (
            <div className="p-6">
                <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h2>
                    <p className="text-gray-600 mb-6">The requested gallery category does not exist.</p>
                    <Link
                        to="/admin/gallery"
                        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primaryHover"
                    >
                        Back to Gallery
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <Link
                        to="/admin/gallery"
                        className="text-primary hover:text-primaryHover flex items-center space-x-2"
                    >
                        <span>←</span>
                        <span>Back to Categories</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {categoryDisplayNames[category]} Gallery
                    </h1>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {localItems.length} photos
                    </span>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="text-sm text-gray-600 flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                        <span>Drag to reorder</span>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primaryHover"
                    >
                        Add Photos
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            ) : localItems.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
                    <div className="text-6xl text-gray-400 mb-4">
                        {category === 'awards' ? '🏆' : category === 'inaugurations' ? '✂️' : '🎪'}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        No photos yet
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Get started by adding photos to the {categoryDisplayNames[category].toLowerCase()} gallery.
                    </p>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primaryHover"
                    >
                        Add Photos
                    </button>
                </div>
            ) : (
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext items={localItems?.map(item => item?._id)} strategy={rectSortingStrategy}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {localItems?.map((item) => (
                                <SortableGalleryItem
                                    key={item?._id}
                                    item={item}
                                    onDelete={handleDeleteClick}
                                    onImageClick={handleImageClick}
                                />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
            )}

            {/* Add Photos Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
                        <h2 className="text-xl font-bold mb-4">
                            Add Photos to {categoryDisplayNames[category]} Gallery
                        </h2>
                        <form onSubmit={handleAddItems}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Select Photos *
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handleFileSelect}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        You can select multiple photos. Supported formats: JPG, PNG, WebP
                                    </p>
                                </div>

                                {/* Selected files preview */}
                                {imageFiles.length > 0 && (
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-sm font-medium text-gray-700 mb-2">
                                            Selected Photos ({imageFiles.length})
                                        </h3>
                                        <div className="space-y-2 max-h-40 overflow-y-auto">
                                            {imageFiles.map((file, index) => (
                                                <div key={index} className="flex items-center justify-between text-sm">
                                                    <span className="text-gray-600 truncate flex-1">
                                                        {file.name}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeSelectedFile(index)}
                                                        className="text-red-600 hover:text-red-800 ml-2"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        value={categoryDisplayNames[category]}
                                        disabled
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowAddModal(false);
                                        setImageFiles([]);
                                    }}
                                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={imageFiles.length === 0}
                                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primaryHover disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                                >
                                    Upload {imageFiles.length > 0 ? `${imageFiles.length} Photos` : 'Photos'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Image Viewer */}
            <ImageViewer
                items={localItems}
                currentIndex={viewerState.currentIndex}
                isOpen={viewerState.isOpen}
                onClose={handleViewerClose}
                onDelete={handleViewerDelete}
                onNavigate={handleViewerNavigate}
            />

            {/* Delete Confirmation Dialog */}
            <DeleteConfirmationDialog
                isOpen={deleteDialog.isOpen}
                itemTitle={deleteDialog.itemTitle}
                onConfirm={handleDeleteConfirm}
                onCancel={handleDeleteCancel}
            />
        </div>
    );
};

export default AdminGalleryCategory;    